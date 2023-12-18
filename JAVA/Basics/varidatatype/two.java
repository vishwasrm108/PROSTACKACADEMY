class two{
    static int b=100;
    int c=500;
    public static void main(String[] args){
        char name='R';
        int a=100;
        String fullname="Vishwas R M";
        System.out.println(fullname);
        System.out.println(name);
        System.out.println(b);
        two t1=new two();
        System.out.println(t1.c);
        t1.c= 600;
        System.out.println(t1.c);
        fullname="vasu";
        a=200;
        System.out.println(fullname);

    }
}