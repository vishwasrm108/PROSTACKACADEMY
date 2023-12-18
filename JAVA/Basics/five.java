 class Five {
    int b=100; //non-static means instamce variable
    public static void main(String[] args){
         //How to read / access instance variable
      //we can access using object
      Five t1=new Five();
      Five t2=new Five();
      Five t3=new Five();
      System.out.println(t1.b);
      System.out.println(t2.b);
      t1.b=200;
      System.out.println(t3.b);
      System.out.println(t1.b);
    }
}
