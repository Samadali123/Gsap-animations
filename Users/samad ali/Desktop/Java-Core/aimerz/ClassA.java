package aimerz;

public class classA {
      public static  void methodA() { // Made method public for access from other packages
        System.out.println("Hello from Method A");
    }

    public static void main(String[] args) {
        methodA(); // This works since it's within the same class
    }
}
