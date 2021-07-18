---
title: BOJ - 카드 구매하기
date: 2019-07-21 17:18:00
category: "📝 Problem Solving"
thumbnail: "./img/thumbnail-boj.png"
draft: false
---

![thumbnail](./img/thumbnail-boj.png)

## 문제

BOJ 11052번 : [카드 구매하기](https://www.acmicpc.net/problem/11052)

## 접근 방법

다이나믹 프로그래밍(Dynamic Programming)을 이용한 KnapSack문제이다. 먼저 누적할 값들을 더할 DP Table을 만들어서 하나씩 채워나간다. Table을 채우는 것을 3가지로 나누면 다음과 같다.

참고로 고를 수 있는 카드 개수를 `cardCnt`, 고를 수 있는 카드의 종류의 개수를 `kindCnt`이다.

#### 경우 1. 어떤 카드도 고를 수 없거나 고를 수 있는 카드 개수가 0개인 경우

0으로 채워준다.

#### 경우 2. 내가 고를 수 있는 카드의 종료의 개수가 고를 수 있는 카드 개수보다 크거나 같은 경우

아래의 경우 중 가장 큰 값이 나온 것으로 채운다.

- 내가 고를 수 있는 카드의 개수보다 1개 적고(ex. 이번에는 P1, P2, P3를 고를 수 있다면 그 전에는 P1, P2를 고를 수 있다), 고를 수 있는 카드 개수가 동일할 때의 조합에서의 지불해야할 가격
- 넣으려는 카드의 개수를 뺀 카드 수에서 가능한 조합의 가격 + 넣으려는 카드의 가격

#### 경우 3. 위의 경우 둘 다 아닌 경우

내가 고를 수 있는 카드의 개수보다 1개 적고 고를 수 있는 카드 개수가 동일할 때의 조합에서의 지불 가격 즉, 앞에서의 가격을 그대로 채워준다.

## 소스 코드

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
        static int MAXCARD; // 최대 살 수 있는 카드
        static int MAXKIND; // 최대 고를 수 있는 카드 종류

        static void Main()
        {
            /*--------------------입력--------------------*/
            MAXCARD = int.Parse(Console.ReadLine());
            //Console.WriteLine("디버깅 : " + MAXCARD);

            string[] parsing = Console.ReadLine().Split(' ');
            MAXKIND = parsing.Length;

            int[] price = new int[MAXKIND];
            for (int i = 0; i < MAXKIND; i++)
            {
                price[i] = int.Parse(parsing[i]);
            }
            /*--------------------------------------------*/

            int[,] DpTable = new int[MAXKIND + 1, MAXCARD + 1];

            for(int kindCnt = 0; kindCnt <= MAXKIND; kindCnt++)
            {
                for(int cardCnt = 0; cardCnt <= MAXCARD; cardCnt++)
                {
                    if (kindCnt == 0 || cardCnt == 0)
                        DpTable[kindCnt, cardCnt] = 0;
                    else if (cardCnt >= kindCnt)
                        // 넣을 수 있다면
                        // "그 전 종류에서 가능했던 조합"과 "넣으려는 카드를 제외한 카드 개수에서 가능한 조합 + 넣으려는 카드" 중 가장 큰 것
                        DpTable[kindCnt, cardCnt] = Math.Max(DpTable[kindCnt - 1, cardCnt], (DpTable[kindCnt, cardCnt - kindCnt] + price[kindCnt - 1]));
                    else
                        // 넣을 수 없다면
                        // 그 전 조합을 넣는다
                        DpTable[kindCnt, cardCnt] = DpTable[kindCnt - 1, cardCnt];
                }
            }

            Console.WriteLine(DpTable[MAXKIND, MAXCARD]);
        }

    }
}
```
