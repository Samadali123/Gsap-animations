package methods;

import java.util.Scanner;

public class first {
   
    
             public static void main(String [] args){
                   Scanner input = new Scanner(System.in);
                    System.out.println("Enter a first number");
                   int a =  input.nextInt() ;

                   System.out.println("Enter a first number");
                   int b=  input.nextInt() ;

              
                    int result =  add(a,b);
                    System.out.println(result);
             }


             // Method signatures include access modifer,class based on instance based method, return type, method name, paramters with data type
             public static   int add(int a, int b){
                return  a+b;
            }
}
