var app = angular.module('app', ['angularMoment'])

app.run(function($rootScope) {
  $rootScope.address = "0xe75142aa2a7ca74dad04ebcc3c9608f0f28bfdcd"; // https://ropsten.etherscan.io/address/0x2328bc22d5705b2cde99e02a780e2fecdca4ad6b
  
  $rootScope.ABI = 
  [
    {
      "constant": true,
      "inputs": [],
      "name": "timestampEnd",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "bid",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "initialPrice",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "instructions",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "beneficiary",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finalize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "refundOnBehalf",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "refund",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "bids",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "increaseTimeIfBidBeforeEnd",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "description",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_description",
          "type": "string"
        }
      ],
      "name": "setDescription",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "price",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "finalized",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAccountListLenght",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "increaseTimeBy",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "accountsList",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "winner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_instructions",
          "type": "string"
        }
      ],
      "name": "setInstructions",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_price",
          "type": "uint256"
        },
        {
          "name": "_description",
          "type": "string"
        },
        {
          "name": "_timestampEnd",
          "type": "uint256"
        },
        {
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "bidder",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "BidEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "bidder",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "Refund",
      "type": "event"
    }
  ]


  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/hi8olE2lF8OqjyBSdtSm "));
  }

  // web3.version.getNetwork((err, network) => {
  //   if(network === "3") {
  //     $rootScope.ropsten = true;
  //   } else {
  //     $rootScope.ropsten = false;
  //   }
  // });

  $rootScope.metamask = web3.currentProvider.isMetaMask;
  $rootScope.contract = web3.eth.contract($rootScope.ABI).at($rootScope.address);
});

app.controller('ctrl', function($scope, $q) {
  $scope.warningShown = true;
	$scope.accounts = [];
  $scope.bids = [];
  // $scope.guranteedBids = [];
	// $scope.refunds = [];

  $scope.contract.description.call(function(err, res) {
    $scope.description = res;
    $scope.$apply();
  });  

  $scope.contract.timestampEnd.call(function(err, res) {
    $scope.timestampEnd = res.toNumber();
    $scope.$apply();
  });  

  // $scope.contract.howManyGuaranteed.call(function(err, res) {
  //   $scope.howManyGuaranteed = res.toNumber();
  // });    

  $scope.contract.price.call(function(err, res) {
    $scope.price = +web3.fromWei( res.toNumber() );
    $scope.$apply();
  });    

  // $scope.contract.priceGuaranteed.call(function(err, res) {
  //   $scope.priceGuaranteed = +web3.fromWei( res.toNumber() );
  // });  

  // $scope.contract.howMany.call(function(err, res) {
  //   $scope.howMany = res.toNumber();
  // });

  // $scope.contract.getAccountListLenght(function(err, res) {
  //   lenght = res.toNumber() + 1; // because we have HEAD and TAIL we do some shananigans here
  //   for (i=0; i<lenght; i++) {
  //     $scope.contract.bids(i, function(err2, res2) {

  //       console.log(res2);

  //       if(res2[3] === "0x0000000000000000000000000000000000000000") return; // dropping witdrawn / HEAD / TAIL bids

  //       var account = {
  //         bidder: res2[3],
  //         value: +web3.fromWei(res2[2].toNumber()) // BigNumber to Number to Ether to digits...
  //       }

  //       $scope.accounts.push(account);  
  //       $scope.$apply(); // TODO: promises, $apply only once towards the end

  //     });
  //   }
  // });  

  // $scope.contract.getGuaranteedContributorsLenght(function(err, res) {
  //   $scope.guaranteedSold = lenght = res.toNumber()
  //   for (i=0; i<lenght; i++) {
  //     $scope.contract.guaranteedContributors(i, function(err2, res2) {
  //       $scope.contract.guaranteedContributions(res2, function(err3, res3) {

  //         var guaranteed = {
  //           bidder: res2,
  //           value: +web3.fromWei(res3.toNumber()) // BigNumber to Number to Ether to digits...
  //         }
  //         $scope.guranteedBids.push(guaranteed);
  //         $scope.$apply();
  //       })
  //     });
  //   }
  // });

  // let bidEvent = $scope.contract.BidEvent({}, {fromBlock: 0, toBlock: 'latest'})
  // bidEvent.get(function(error, events) {

  //   console.log(events);

  //   events.forEach(function(event) {
  //     var bid = {
  //       bidder: event.args.bidder,
  //       value: +web3.fromWei( event.args.value.toNumber() ),
  //       timestamp: event.args.timestamp.toNumber(),
  //       tx: event.transactionHash
  //     }
  //     $scope.bids.push(bid);
  //   });

  //   $scope.$apply();
  // });   

  // let guaranteedBidEvent = $scope.contract.GuaranteedBid({}, {fromBlock: 0, toBlock: 'latest'})
  // guaranteedBidEvent.get(function(error, events) {

  //   console.log(events);

  //   events.forEach(function(event) {
  //     var bid = {
  //       bidder: event.args.bidder,
  //       value: +web3.fromWei( event.args.value.toNumber() ),
  //       timestamp: event.args.timestamp.toNumber(),
  //       tx: event.transactionHash
  //     }
  //     $scope.bids.push(bid);
  //   });

  //   $scope.$apply();
  // });  


  // let refundEvent = $scope.contract.Refund({}, {fromBlock: 0, toBlock: 'latest'})
  // refundEvent.get(function(error, events) {

  //   console.log(events);

  // 	events.forEach(function(event) {
  // 		var refund = {
  // 			bidder: event.args.bidder,
  // 			value: +web3.fromWei( event.args.value.toNumber() ),
  // 			timestamp: event.args.timestamp.toNumber(),
  // 			tx: event.transactionHash
  // 		}
  // 		$scope.refunds.push(refund);
  // 	});

  // 	$scope.$apply();
  // });



  // TODO: display popup as new bid is incoming
  // BidEvent = Instance.BidEvent();
  // BidEvent.watch(function(error, result){
  //  console.log(error, result);
  // });

});
