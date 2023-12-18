
public class five {
 public static void main(String[] args) {
    String name="malayalam",reverse="";
    for(int i=0;i<name.length();i++){
        char ch=name.charAt(i);
        reverse=ch+reverse;
    }
    System.err.println(reverse);
    if (name.equals(reverse)) {
        System.out.println("it is palindrome");
    }
    else{
                System.out.println("it is not palindrome");
    }

 }
    
}