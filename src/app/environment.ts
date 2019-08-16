export const firebaseConfig = {
    apiKey: "AIzaSyANQg2X_uc1WY9HXCCvwxQvte9rq_5gioY",
    authDomain: "hotelapp-ded11.firebaseapp.com",
    databaseURL: "https://hotelapp-ded11.firebaseio.com",
    projectId: "hotelapp-ded11",
    storageBucket: "hotelapp-ded11.appspot.com",
    messagingSenderId: "246605429476",
    appId: "1:246605429476:web:857a046eff53e52c"
  
};

export const snapshotToArray = snapshot => {
  let returnArray = [];

  snapshot.forEach(element => {
  let list = element.val();
  list.key = element.key;
  returnArray.push(list)

  });

  return returnArray;
}
