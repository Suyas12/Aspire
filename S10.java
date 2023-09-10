public class S10{
	public static void main(String args[]) {
		int n = 5;
		//Loop to iterate over each row in reverse order
		for(int i=n;i>=1;i--){
			//Loop to iterate over each column of the ith row in reverse order
			for(int j=i;j>=1;j--){
				System.out.print(j+ " "); 
			}
			System.out.println();
		}
	}
}

