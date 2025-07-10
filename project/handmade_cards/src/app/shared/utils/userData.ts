import { Injectable } from '@angular/core';
import { USER_TOKEN } from '../cosntants/constants';
import { ServRespUserData } from './interfaces';
import { BehaviorSubject } from 'rxjs';

export function setUserData(res: ServRespUserData): void {
  localStorage.setItem(USER_TOKEN, JSON.stringify(res));
}

export function getUserData(): ServRespUserData | null {
  const userData = localStorage.getItem(USER_TOKEN);
  if (!userData) {
    return null;
  }
  return JSON.parse(userData);
}

export function clearUserData(): void {
  localStorage.removeItem(USER_TOKEN);
}

export function isLogged(): boolean {
  const isItLogged = getUserData() ? true : false;
  return isItLogged;
}
