function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);

  let that = this;
  this.http.onload = function() {
    if(that.http.status === 200) {
      // return that.http.responseText;
      callback(null, that.http.responseText);
    } else {
      callback('Error: ' + that.http.status);
    }
  }

  this.http.send();
}

//Make HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let that = this;
  this.http.onload = function() {
    callback(null, that.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// Makee an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let that = this;
  this.http.onload = function() {
    callback(null, that.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
  this.http.open('DELETE', url, true);

  let that = this;
  this.http.onload = function() {
    if(that.http.status === 200) {
      // return that.http.responseText;
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + that.http.status);
    }
  }

  this.http.send();
}