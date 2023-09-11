class SA6 extends Thread
{
 	public void run()
 	{
  		System.out.println("Hello There this is thread.");
 	}
}
class MyThreadDemo
{
 	public static void main(String args[])
 	{
  		SA6 s = new  SA6();
  		s.start();
 	}
}
