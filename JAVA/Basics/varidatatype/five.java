 class Five {
    int b=100; //non-static means instamce variable
    public static void main(String[] args){
         //How to read / access instance variable
      //we can access using object
      five t1=new five();
      five t2=new five();
      five t3=new five();
      System.out.println(t1.b);
      System.out.println(t2.b);
      t1.b=200;
      System.out.println(t3.b);
      System.out.println(t1.b);
    }
}
