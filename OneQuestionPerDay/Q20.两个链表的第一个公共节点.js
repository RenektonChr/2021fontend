/**
 * 求两个链表的公共节点
 * 输入两个链表，找出它们的第一个公共节点。
 * 注意：
 * 如果两个链表没有交点，返回null。
 * 在返回结果后，两个链表仍须保持原有的结构。
 * 可假定链表中没有循环。
 * 程序尽量满足O(n)的时间复杂度，且仅用O(1)的内存。
 */

/**
 * 解法一：hash + 遍历 
 * 解析：找相同项的思路基本上靠哈希，传入两个链表的头结点（这种方法比较好理解，但是时间复杂度是O(N)，空间复杂度是O(N)）。
 *      1.先以链表A为样本，循环构造一个样本map。
 *      2.循环B链表找出相同的节点。
 */
const getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) {
    return null
  }
  const map = new Map();
  let node = headA;
  while(node) {
    map.set(node, true);
    node = node.next;
  }
  node = headB;
  while(node) {
    if(map.has(node)) return node;
    node = node.next;
  }
  return null;
}

/**
 * 解法二：快慢指针
 * 解析：
 * 1.遍历得到两个链表的长度，以及长度差 diff
 * 2.将慢指针 slow 指向较长链表，快指针 fast 指向较短链表
 * 3.slow 向前移动 diff 个距离
 * 4.slow 和 fast 同时向前移动，每次移动一个距离。若存在公共节点，那么它们一定会遇上。
 */
const getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) {
    return null;
  }
  let node = headA;
  let lengthA = 0;
  let lengthB = 0;
  while(node) {
    lengthA++;
    node = node.next;
  }

  node = headB;
  while(node) {
    lengthB++;
    node = node.next;
  }

  let diff = Math.abs(lengthA - lengthB);
  let slow;
  let fast;
  if(lengthA > lengthB) {
    slow = headA;
    fast = headB;
  }else {
    slow = headB;
    fast = headA;
  }

  while(diff !== 0) {
    slow = slow.next;
    diff--;
  }

  while(slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
