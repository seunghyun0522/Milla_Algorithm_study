import java.util.Scanner;

public class Main{

   public static void main(String []args){
        
   Scanner in = new Scanner(System.in);

        int NUM = in.nextInt();
        int result =0;
        for(int i=0; i<NUM;i++){
            int n = i;
            int sum=0;
            while(n>0){
                sum += n %10;
                n= n/10;
            }
            if(sum + i == NUM){
                result =i;
                break;
            }
  
        }
        System.out.println(result);
        
     }
}
