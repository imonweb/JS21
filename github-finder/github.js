class Github {
  constructor() {
    this.client_id = 'a1886a9c0d7842f1367c';
    this.client_secret = 'f76a7d5cd370454683fc941de47b2eb2e48df0fc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}