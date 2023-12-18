public class four {
    public static void main(String[] args) {
        int n,i=121,rev=0,rem=0;
        n=i;
        while(i!=0) {
            rem=i%10;
            rev=rev*10+rem;
            i=i/10;
        }
        System.out.println(rev);
        if (n==rev) {
            System.out.println("it is palindrome");
        } else {
                        System.out.println("it is not palindrome");

        }
    }
}
