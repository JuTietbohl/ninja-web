var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();

/* In C# terminal local
 
 using System.Threading.Channels;
using System;
using NAudio.Wave;

namespace Teste
{
    class Testando
    {
        static void Main(string[] args)
        {
            using var audioFile = new AudioFileReader(@"C:\Users\Julia_Tietbohl\RiderProjects\CSharp\CSharp\audioNumb.mpeg");
            using var outputDevice = new WaveOutEvent();
            outputDevice.Init(audioFile);
            
            
            Console.WriteLine("Sup");

            Console.WriteLine("Please, put your name:");
            string name = Console.ReadLine();

            Console.WriteLine("and put your nickname:");
            string nickName = Console.ReadLine();
            
            Console.WriteLine("Ok "+ name +" are you a ninja?");
            bool ninja = Console.ReadLine() == "yes";
            

            while (!ninja)
            {
                
                Console.WriteLine("Ok, again "+ name +" are you a ninja?");
                bool ninja2 = Console.ReadLine() == "yes";
                
                if (ninja2 == false)
                {
                    Console.WriteLine("You sure?");
                    string sure = Console.ReadLine();
                    
                    if (sure == "yes")
                    {
                        Console.WriteLine("You really sure? That doesn’t sound right");
                        string sure2 = Console.ReadLine();

                        if (sure2 == "yes")
                        {
                            Console.WriteLine("That’s your final answer? Really? Think again.");
							
                        }
                        else
                        {
                            ninja2 = true;
                            
                        }
                    }
                    else
                    {
                        ninja2 = true;
    
                    }

                }

                if (ninja2 == true)
                {
                    ninja = true;
                    Console.WriteLine("Finally.");
                }
                
            }
 
			if (ninja == true){
                
                Console.WriteLine("Choice your battle: \n\t1- Rock Lee \n\t2- Gaara \n\t- You can choice both, select 1 2");
                string userChoice = Console.ReadLine();
                

                if (userChoice == "1")
                {
                    Console.WriteLine(name + " is in a battle with Rock Lee");
                }

                if (userChoice == "2")
                {
                    Console.WriteLine(name + " is in a battle with Gaara");
                }

                if (userChoice.Contains("1") && userChoice.Contains("2"))
                {
                    outputDevice.Play();
                    Console.WriteLine(nickName+ ", Rock Lee and Gaara! NUMB!!!!!! \n\tPress any key to quit.");
                    Console.ReadLine();
                }
                
            }else{
                Console.WriteLine(name + " what's wrong with you?!");

            }

        }
    }
}


 */