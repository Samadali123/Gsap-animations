package methods;

public class test {
     public static void main(String[] args) {
        //  printjunk2(); // call static methods in every static methods as well as non static methods
        // printjunk(); // cannot call instance methods in static methods
     }

     public void printjunk(){
        System.out.println("Hello, world!");
         printjunk2(); // call static methods in non static methods also
     }

     public static void printjunk2(){
        System.out.println("Hello, world Again!");

     }


     // two types of methods :
     // 1. static methods : call  in every static methods and non static methods
     // 2. instance methods(Non-static methods) : call only in  object we create with that class whose method is not call from  static method
     
}
