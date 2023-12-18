class Emp {
	int eId=102;
	String eName;
	double eSal;
	static String e_orgName="TCS";

	public static void main(String[] args) {
		Emp e1=new Emp();
		Emp e2=new Emp();
		Emp e3=new Emp();
        System.out.println(e1.eId);	
		e1.eId=101;			 
        System.out.println(e1.eId);	
        e1.eId=105;
		e2.eId=102;
		e3.eId=103;
		 e1.eName="vasu";
		 e2.eName="naveen";
		 e3.eName="varun taj";
		 
		 e1.eSal=35000.00;
		 e2.eSal=45000.00;
		 e3.eSal=55000.00;
		 
		 System.out.print(e1.eSal);
		 System.out.print(e2.eSal);
		 System.out.println(e3.eSal);
		 System.out.println(e1.eId);
		 
		 

	}

}