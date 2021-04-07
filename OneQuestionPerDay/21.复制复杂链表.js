/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针：next指向下一个节点，特殊指针 random 指向任意一个节点），
 * 返回结果为复制后链表的head。
 * 
 * 第一次遍历，复制每个节点和 next 指针，并且保存“原节点-复制节点”的映射关系
 * 第二次遍历，通过哈希表获得节点对应的复制节点，更新 random 指针
 */

const copyRandomList = function(head) {
  if(!head) {
    return null;
  }

  const map = new Map();
  // 保存当前节点
  let node = head;
  // 以当前节点，创建节点副本
  const copyHead = new Node(node.val);
  let copyNode = copyHead;
  // 保存“原节点-复制节点”的映射关系
  map.set(node, copyNode);
  // 循环保存，判断条件为头结点的下一个
  while(node.next) {
    copyNode.next = new Node(node.next.val);
    // 更新node和copyNode
    node = node.next;
    copyNode = copyNode.next;
    // 保存映射关系
    map.set(node, copyNode);
  }

  // 再次附初始值
  node = head;
  copyNode = copyHead;
  // 循环对random做处理，原理和第一个while是一样的
  while(copyNode) {
    copyNode.random = map.get(node.random);
    node = node.next;
    copyNode = copyNode.next;
  }

  return copyHead;
}
