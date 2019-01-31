
/**
 * 击鼓传花
 * 
 * 传入两个参数，一个是参与击鼓传花的人数，另一个是第几个数字停
 * 
 * **/

const Queue = require('./Queue');
function hotPotato(name, num) {
  let nameQueue = new Queue();
  for (let i = 0; i < name.length; i++) {
    nameQueue.enqueue(name[i]);
  }
  while (nameQueue.size() > 1) {
    for (let i = 0; i < num; i++) {
      nameQueue.enqueue(nameQueue.dequeue());
    }
    console.log(`${nameQueue.dequeue()}被淘汰`);
  }
  return nameQueue.dequeue();
}

let Winer = hotPotato(['zhao', 'li', 'han', 'zhang', 'wang'], 7);
console.log(Winer); // zhao
