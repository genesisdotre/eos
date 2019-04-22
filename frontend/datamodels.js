class Challenge {
    constructor(user, deposit, description, beginning, end, count, state) {
      this.user = user;
      this.deposit = deposit;
      this.description = description;
      this.beginning = beginning;
      this.end = end;
      this.count = count; 
      this.state = state;
    }
  }
  
  let ChallengeState = { 0: "initial", 1: "inprogress", 2: "success", 3: "failed" };
  let SubmissionState = { 0: "initial", 1: "voting", 2: "accepted", 3: "rejected" };