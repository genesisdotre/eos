var app = angular.module('app', ['angularMoment', 'ngRoute'])


// try {
//   accounts = await ethereum.enable();
// } catch (error) {
//   console.log(error);
// }

aaddress = "0xee532dc8ad07daae711048d8cffb7deb58be9e09";
  
ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_description",
        "type": "string"
      },
      {
        "name": "_beginning",
        "type": "uint256"
      },
      {
        "name": "_end",
        "type": "uint256"
      },
      {
        "name": "_count",
        "type": "uint256"
      }
    ],
    "name": "createChallenge",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_url",
        "type": "string"
      },
      {
        "name": "_comment",
        "type": "string"
      },
      {
        "name": "challengeID",
        "type": "uint256"
      }
    ],
    "name": "createSubmission",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "creator",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "deposit",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "description",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "beginning",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "end",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "count",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "ChallengeAdd",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "creator",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "challengeID",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "url",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "comment",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "SubmissionAdd",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "chalengeSubmissionIDs",
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
    "name": "challenges",
    "outputs": [
      {
        "name": "user",
        "type": "address"
      },
      {
        "name": "deposit",
        "type": "uint256"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "beginning",
        "type": "uint256"
      },
      {
        "name": "end",
        "type": "uint256"
      },
      {
        "name": "count",
        "type": "uint256"
      },
      {
        "name": "state",
        "type": "uint8"
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
        "name": "challengeID",
        "type": "uint256"
      }
    ],
    "name": "getChallengeById",
    "outputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getChallengesCount",
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
        "name": "submissionID",
        "type": "uint256"
      }
    ],
    "name": "getSubmissionById",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSubmissionsCount",
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
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getUserChallengeIDs",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isOwner",
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
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "submissions",
    "outputs": [
      {
        "name": "url",
        "type": "string"
      },
      {
        "name": "comment",
        "type": "string"
      },
      {
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "name": "state",
        "type": "uint8"
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
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userChallengeIDs",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]

provider = new ethers.providers.Web3Provider(web3.currentProvider);
console.log(await provider.getNetwork());
signer = provider.getSigner();
contract = new ethers.Contract(address, ABI, signer);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: "HomeCtrl",
      resolve: {
        challenges: function(challengeService) {
          return challengeService.getChallenges();
        } 
      }
    })
    .when('/challenge/:id', {
      templateUrl: 'partials/challenge.html',
      controller: "ChallengeCtrl"
    })
    .otherwise('/home')
});

app.controller('HomeCtrl', function($scope, $window, challenges) {
  $scope.message = "IT WORKS";
  $scope.address = $window.address
  $scope.challenges = challenges;
});

app.controller('ChallengeCtrl', function($scope, $routeParams) {
  console.log($routeParams);
  $scope.id = $routeParams.id;
});

app.service('challengeService', function($q) {
  let service = {};

  let challenges = [];

  service.getChallenges = async function() {

    let defer = $q.defer();

    if (challenges.length > 0) {
      defer.resolve(challenges);
    }

    contract.getChallengesCount().then(function(count) { // contract is not defined...

      let arrayOfPromises = [];
  
      for (let i=0; i<count; i++) {
        arrayOfPromises.push(contract.getChallengeById(i));
      }
    
      $q.all(arrayOfPromises).then(function(results) {
        results.forEach((r) => {
          challenges.push(new Challenge(r[0], parseFloat(ethers.utils.formatEther(r[1])).toFixed(3), r[2], r[3].toNumber(), r[4].toNumber(), r[5].toNumber(), r[6] ))
        })
        defer.resolve(challenges);
      });

    })
  
    return defer.promise;
  }

  service.getChallengeById = function(id) {
    return challenges[id];
  }

  return service;
});

app.filter('challenge', function() {
  return function(input) { return ChallengeState[input] };
});

app.filter('submission', function() {
  return function(input) { return SubmissionState[input] };
});