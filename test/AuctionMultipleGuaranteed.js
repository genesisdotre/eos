/* eslint-disable no-undef */ // Avoid the linter considering truffle elements as undef.
const AuctionMultipleGuaranteed = artifacts.require('AuctionMultipleGuaranteed.sol')
const AuctionMultiple = artifacts.require('AuctionMultiple.sol')
const { expectThrow, increaseTime } = require('./helpers')

contract('AuctionMultipleGuaranteed', function (accounts) {
  let owner = accounts[0]
  let bidderA = accounts[1]
  let bidderB = accounts[2]
  let bidderC = accounts[3]
  let bidderD = accounts[4]
  let beneficiary = accounts[5]
  
  let day = 24 * 60 * 60;
  let duration = 3 * day; // similar amount to `increaseTimeIfBidBeforeEnd`
  let auction;
  let timestampEnd;

  let headBidId = 120000000 * 1e18;
  let tailBidId = 0;
  let newBidId1 = 1;
  let newBidId2 = 2;
  let newBidId3 = 3;
  let newBidId4 = 4;

  let contribution1 = 1e18;
  let contribution2 = 2e18;
  let guaranteed = 2.5e18;

  beforeEach(async function() {
    timestampEnd = web3.eth.getBlock('latest').timestamp  +  duration; // 1 hour from now
    auction = await AuctionMultipleGuaranteed.new(1e18, "item", timestampEnd, beneficiary, 5, 3, 2e18, {from: owner});
  });

  it('Should be able to set up the constructor for multiple auction with guranteed', async function() {
    assert.equal(await auction.owner(), owner, 'The owner is not set correctly');
    assert.equal(await auction.description(), "item", 'The description is not set correctly');
    assert.equal(await auction.timestampEnd(), timestampEnd, 'The endtime is not set correctly');
    assert.equal(await auction.beneficiary(), beneficiary, 'The beneficiary is not set correctly');
    assert.equal(await auction.howMany(), 5, 'The beneficiary is not set correctly');
    assert.equal(await auction.howManyGuaranteed(), 3, 'The beneficiary is not set correctly');
    assert.equal(await auction.priceGuaranteed(), 2e18, 'The beneficiary is not set correctly');
  });

  it('Should accept a bid from a guy and set "next" "prev" correctly (as usual)', async function() {
    await auction.sendTransaction({ value: contribution1, from: bidderA });

    var newBid = await auction.bids.call(newBidId1);
    assert.equal(newBid[0].toNumber(), tailBidId);
    assert.equal(newBid[1].toNumber(), headBidId);
    assert.equal(newBid[2].toNumber(), contribution1);

    var headBid = await auction.bids.call(headBidId);
    assert.equal(headBid[0].toNumber(), newBidId1);
    assert.equal(headBid[1].toNumber(), tailBidId);

    var tailBid = await auction.bids.call(tailBidId);
    assert.equal(tailBid[0].toNumber(), headBidId);
    assert.equal(tailBid[1].toNumber(), newBidId1);
  });

  it('Should accept a guaranteed bid and not move head tail', async function() {
    await auction.sendTransaction({ value: guaranteed, from: bidderA });

    var headBid = await auction.bids.call(headBidId);
    assert.equal(headBid[0].toNumber(), tailBidId);
    assert.equal(headBid[1].toNumber(), tailBidId);

    var tailBid = await auction.bids.call(tailBidId);
    assert.equal(tailBid[0].toNumber(), headBidId);
    assert.equal(tailBid[1].toNumber(), headBidId);
  });

  it('Should accept a guaranteed bids and then place a regular one (after they are exhausted)', async function() {
    await auction.sendTransaction({ value: guaranteed, from: bidderA });
    await auction.sendTransaction({ value: guaranteed, from: bidderB });
    await auction.sendTransaction({ value: guaranteed, from: bidderC });
    await auction.sendTransaction({ value: guaranteed, from: bidderD });

    var newBid = await auction.bids.call(newBidId1);
    assert.equal(newBid[0].toNumber(), tailBidId);
    assert.equal(newBid[1].toNumber(), headBidId);
    assert.equal(newBid[2].toNumber(), guaranteed);

    var headBid = await auction.bids.call(headBidId);
    assert.equal(headBid[0].toNumber(), newBidId1);
    assert.equal(headBid[1].toNumber(), tailBidId);

    var tailBid = await auction.bids.call(tailBidId);
    assert.equal(tailBid[0].toNumber(), headBidId);
    assert.equal(tailBid[1].toNumber(), newBidId1);

    // should update other counters as well

    var howManyGuaranteed = await auction.howManyGuaranteed.call()
    var howMany = await auction.howMany.call()
    assert.equal(howManyGuaranteed, 0, "no more guaranteed left");
    assert.equal(howMany, 2, "two regular remaining");
  });

  it('Should correctly finalize the thing', async function() {
    await auction.sendTransaction({ value: guaranteed, from: bidderA });
    await auction.sendTransaction({ value: guaranteed + 1e18, from: bidderB });
    await auction.sendTransaction({ value: guaranteed, from: bidderC });
    await auction.sendTransaction({ value: guaranteed, from: bidderD });

    increaseTime(duration + 1);

    var balanceBefore = await web3.eth.getBalance(beneficiary).toNumber();
    await auction.finalize({ from: owner });
    var balanceAfter = await web3.eth.getBalance(beneficiary).toNumber();
    assert.closeTo(balanceBefore + (guaranteed * 4) + 1e18, balanceAfter, 0.01 * 1e18, "finalized amount is not correct");    
  });

  it('Should convert a regular bid into a guaranted bid', async function() {
    await auction.sendTransaction({ value: contribution1, from: bidderA });
    await auction.sendTransaction({ value: contribution1, from: bidderB });
    await auction.sendTransaction({ value: contribution1, from: bidderC }); // two guys with the same contribution, later will win

    await auction.sendTransaction({ value: contribution1, from: bidderA }); // contribution1 + contribution1 = guaranteed now

    var newBid1 = await auction.bids.call(newBidId1);
    assert.equal(newBid1[0].toNumber(), 0);
    assert.equal(newBid1[1].toNumber(), 0);
    assert.equal(newBid1[2].toNumber(), 0);    

    var newBid2 = await auction.bids.call(newBidId2);
    assert.equal(newBid2[0].toNumber(), tailBidId);
    assert.equal(newBid2[1].toNumber(), newBidId3);
    assert.equal(newBid2[2].toNumber(), contribution1);    

    var newBid3 = await auction.bids.call(newBidId3);
    assert.equal(newBid3[0].toNumber(), newBidId2);
    assert.equal(newBid3[1].toNumber(), headBidId);
    assert.equal(newBid3[2].toNumber(), contribution1);

    var headBid = await auction.bids.call(headBidId);
    assert.equal(headBid[0].toNumber(), newBidId3);
    assert.equal(headBid[1].toNumber(), tailBidId);

    var tailBid = await auction.bids.call(tailBidId);
    assert.equal(tailBid[0].toNumber(), headBidId);
    assert.equal(tailBid[1].toNumber(), newBidId2);

    // should update other counters as well
    var howManyGuaranteed = await auction.howManyGuaranteed.call()
    var howMany = await auction.howMany.call()
    assert.equal(howManyGuaranteed, 2, "two more guaranteed left, intially there were three");
    assert.equal(howMany, 4, "four regular remaining");
  });

  it('Should NOT convert a regular bid into a guaranted bid, when guaranteed are out of luck', async function() {
    await auction.sendTransaction({ value: guaranteed, from: bidderB });
    await auction.sendTransaction({ value: contribution1, from: bidderA });
    await auction.sendTransaction({ value: guaranteed, from: bidderC });
    await auction.sendTransaction({ value: guaranteed, from: bidderD });

    await auction.sendTransaction({ value: contribution1, from: bidderA }); // contribution1 + contribution1 = guaranteed now but out of luck

    var newBid1 = await auction.bids.call(newBidId1);
    assert.equal(newBid1[0].toNumber(), tailBidId);
    assert.equal(newBid1[1].toNumber(), headBidId);
    assert.equal(newBid1[2].toNumber(), contribution1 + contribution1);    

    var headBid = await auction.bids.call(headBidId);
    assert.equal(headBid[0].toNumber(), newBidId1);
    assert.equal(headBid[1].toNumber(), tailBidId);

    var tailBid = await auction.bids.call(tailBidId);
    assert.equal(tailBid[0].toNumber(), headBidId);
    assert.equal(tailBid[1].toNumber(), newBidId1);

    // should update other counters as well
    var howManyGuaranteed = await auction.howManyGuaranteed.call()
    var howMany = await auction.howMany.call()
    assert.equal(howManyGuaranteed, 0, "zero guaranteed left");
    assert.equal(howMany, 2, "two regular remaining");
  });

});