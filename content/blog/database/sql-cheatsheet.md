---
title: SQL ๋ฌธ๋ฒ ์ ๋ฆฌ
date: 2021-07-17 17:42:00
category: "๐พ Database"
thumbnail: "./img/thumbnail.png"
draft: false
---

![thumbnail](./img/thumbnail.png)

> ์ด ๊ธ์ [Mode SQL Tutorial](https://mode.com/sql-tutorial/)๋ฅผ ๊ณต๋ถํ๋ฉฐ ์ ๋ฆฌํ ๊ธ์๋๋ค! ๊ณ์ ์๋ฐ์ดํธ๋  ์์ ์ด๋ฉฐ, ์๋ชป๋ ๋ถ๋ถ์ด ์๋ค๋ฉด ์น์ ํ ๋ง์ํด์ฃผ์๋ฉด ๊ฐ์ฌํ๊ฒ ์ต๋๋ค๐

## SELECT

- ํ์ด๋ธ์์ ์ฌ๋ฌ ์ปฌ๋ผ ์ถ์ถ

```sql
SELECT col1_name, col2_name, col3_name FROM table_name
```

- ํ์ด๋ธ์์ ๋ชจ๋  ์ปฌ๋ผ ์ถ์ถ

```sql
SELECT * FROM table_name
```

- ์ปฌ๋ผ ์ถ์ถ ํ ์ปฌ๋ผ๋ช ๋ฐ๊พธ๊ธฐ

```sql
SELECT col_name AS new_col_name FROM table_name
```

## LIMIT

- ์์ N๊ฐ์ ๋ฐ์ดํฐ๋ง ์ถ์ถ \(N์ 0์ด์์ ์ ์\)

```sql
SELECT * FROM table_name
LIMIT 100
```

## WHERE

- ์กฐ๊ฑด์ ๋ง์กฑํ๋ ๋ฐ์ดํฐ ์ถ์ถ

```sql
SELECT * FROM table_name
WHERE condition > 1
```

## Comparison Operators

### ์ซ์ํ ๋ฐ์ดํฐ

- `=` : ๊ฐ๋ค
- `<>` `!=` : ๊ฐ์ง ์๋ค
- `>` `<`: ํฌ๋ค, ์๋ค
- `>=` `<=` : ํฌ๊ฑฐ๋ ๊ฐ๋ค, ์๊ฑฐ๋ ๊ฐ๋ค

```sql
SELECT * FROM table_name
WHERE number_col_name > 100
```

### ๋น์ซ์ํ ๋ฐ์ดํฐ

- `=` : ๋ฌธ์์ด ์ ์ฒด๊ฐ ๋์ผํ๋ค
- `!=` : ๋ฌธ์์ด ์ ์ฒด๊ฐ ๋์ผํ์ง ์๋ค
- `>` `<` `>=` `<=` : ์ํ๋ฒณ ์์ ๊ธฐ์ค์ผ๋ก ํํฐ๋งํ๋ค

```sql
--๋ฌธ์์ด ์์๋ฅผ ๋ํ๋  ๋ "๊ฐ ์๋๋ผ '๋ก ๋ํ๋ด์ผ ํ๋ค.
SELECT * FROM table_name
WHERE nonnumber_col_name = 'January'
```

```sql
--์ํ๋ฒณ์ ๊ธฐ์ค์ผ๋ก ํํฐ๋ง์ ํ  ๋ ๊ตณ์ด ๋ฌธ์์ด ์ ์ฒด๋ฅผ ๋ค ์ธ ํ์ ์๊ณ 
--์ฒซ ๊ธ์๋ง ์จ์ฃผ๋ฉด ๋ ๊ฐ๋จํ ๋ํ๋ผ ์ ์๋ค.
SELECT * FROM table_name
WHERE nonnumber_col_name > 'A'
```

## Arithmetic Operators

`+` `-` `ร` `/` ๋ก ์ปฌ๋ผ ๊ฐ์ ์ฐ์  ์ฐ์ฐ์ ํ์ฌ ์๋ก์ด ์ปฌ๋ผ์ ์์ฑํ๊ฑฐ๋ ์๋ก์ด ์กฐ๊ฑด ์ปฌ๋ผ์ ๋ง๋ค ์ ์๋ค.

```sql
SELECT col1_name,
			 col2_name,
			 col3_name + col4_name AS new_col_name
FROM table_name
```

```sql
SELECT * FROM table_name
WHERE col1_name + col2_name < 100
```

## References

- [Mode SQL Tutorial - MODE](https://mode.com/sql-tutorial/)
