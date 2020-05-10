

import { BehaviorSubject, Observable } from 'rxjs';
import User from '../../models/User.model';
import { Component } from 'react';
import { isFunction } from 'util';

var localStorage = require('localStorage')

var AuthService = (function() {
  

  var getUser = function() {
    if(localStorage.getItem('currentUser') != null)
    {
      return JSON.parse(localStorage.getItem('currentUser')); 
    }else{
      return undefined;
    }

  };

  var createSession = function(user: User){

    localStorage.setItem('currentUser',JSON.stringify(user))
 
  }
  var logout = function() {
    localStorage.removeItem('currentUser');
 
  }
 
  return {
    getUser: getUser,
    createSession: createSession,
    logout : logout
  }

})();

export default AuthService;