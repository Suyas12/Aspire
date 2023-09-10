class SA7 implements Runnable
{
    public void run()
    {
        System.out.println("Hello there this is runnable");
    }
}
class MyThreadDemo
{
    public static void main(String args[])
    {
        SA7 s = new SA7();
        Thread t = new Thread(s);
        t.start();
    }
}
