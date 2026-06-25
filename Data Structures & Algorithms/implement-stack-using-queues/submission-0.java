

public class MyStack {

  private final ArrayDeque<Integer> inQueue;

  public MyStack() {
    inQueue = new ArrayDeque<>();

  }

  public void push(int x) {

    inQueue.add(x);

  }

  public int pop() {
    return inQueue.removeLast();

  }

  public int top() {

    return inQueue.getLast();

  }

  public boolean empty() {
    return inQueue.isEmpty();

  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */