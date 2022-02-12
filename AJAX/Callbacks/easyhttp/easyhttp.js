function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);

  let that = this;
  that.http.onload = function() {
    if(that.http.status === 200) {
      // return that.http.responseText;
      callback(that.http.responseText);
    }
  }

  this.http.send();
}
//Make HTTP POST Request