---
title: BOJ - ATMλ¬Έμ 
date: 2019-07-20 13:34:00
category: "π Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

> μλͺ»λ λΆλΆμ΄ μλ€λ©΄ μΉμ ν λ§μν΄μ£Όμλ©΄ κ°μ¬νκ² μ΅λλ€π

## λ¬Έμ 

BOJ 11399λ² : [ATM](https://www.acmicpc.net/problem/11399)

## μ κ·Ό λ°©λ²

μ΄ μκ°μ λνλ λ° μμ΄μ κ°μ₯ λ¨Όμ  μ¨ μ¬λμΌ μλ‘ weightκ° μ¦κ°νλ€. μμ  μλ ₯1μ ν΅ν΄μ ν λ² μκ°ν΄λ³΄μ. 5λͺμ μ¬λμ΄ μκ³ , μ²« λ²μ§Έ μ¬λλΆν° 3λΆ, 1λΆ, 4λΆ, 3λΆ, 2λΆμ΄ κ±Έλ¦°λ€. κ·Έ λ€μ μ¬λμ κ·Έ μ  μ¬λμ μ΄ μκ°μ κ°κ³  μμ μ μκ°μ λνκ² λλ―λ‘ μ΄ μκ°μ κ΅¬ν  λ "μ²« λ²μ§Έ μ¬λμ μμ μ μκ°μ 5λ°°, λ λ²μ§Έ μ¬λμ μμ μ μκ°μ 4λ°° ..." μ΄λ° μμΌλ‘ weightλ₯Ό κ°κ² λλ€.

<br>

<img src="./img/atm.png">

## μμ€μ½λ

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practice
{
    class Program
    {

        static int[] time;

        static void Main(string[] args)
        {
            int numOfPeople = 0;

            /*-------------------μλ ₯-------------------*/
            numOfPeople = int.Parse(Console.ReadLine());
            time = new int[numOfPeople];

            string input = Console.ReadLine();
            string[] parsing = input.Split(' ');

            for(int i = 0; i < time.Length; i++)
            {
                time[i] = int.Parse(parsing[i]);
            }
            /*-----------------------------------------*/

            int result = SumOfTime();
            Console.WriteLine(result);
        }

        static int SumOfTime()
        {
            Sort();

            for(int i = 0; i < time.Length; i++)
            {
                time[i] *= time.Length - i;
            }

            int total = 0;
            for(int i = 0; i<time.Length; i++)
            {
                total += time[i];
            }

            return total;
        }

        static void Sort()
        {
            for(int i = 0; i < time.Length -1; i++)
            {
                int temp = i;
                for(int j = i+1; j < time.Length; j++)
                {
                    if (time[temp] >= time[j])
                        temp = j;
                }

                Swap(i, temp);
            }
        }

        static void Swap(int x, int y)
        {
            int temp = time[x];
            time[x] = time[y];
            time[y] = temp;
        }
    }
}
```
