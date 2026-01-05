import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

// Menu Data
const menuData = {
  "Səhər Yeməyi": [
    {
      name: "Səhər Yeməyi 2 Nəfərlik",
      price: "30 AZN",
      description:
        "Pomidor yumurta, smuzi, sucuklu yumurta, qızardılmış sosis, pomidor, xiyar, ağ pendir, gouda pendiri, çedar pendiri, kərə yağı, şor, xama, qaymaq, bal, şirin kəsmik, qatılaşdırılmış süd, şokolad yağı, qara/yaşıl zeytun, mürəbbə, göyərti, toyuq kolbasa, servelat, vetçina, tost çörəyi, meyvə şirəsi, siqara börəyi, simit",
    },
    {
      name: "Səhər Yeməyi 4 Nəfərlik",
      price: "55 AZN",
      description:
        "Pomidor yumurta, sucuklu yumurta, omlet, tərəvəzli omlet, smuzi, qızardılmış sosis, pomidor, xiyar, ağ pendir, gouda pendiri, çedar pendiri, kərə yağı, şor, xama, qaymaq, bal, şirin kəsmik, qatılaşdırılmış süd, şokolad yağı, qara/yaşıl zeytun, mürəbbə, göyərti, toyuq kolbasa, servelat, vetçina, tost çörəyi, meyvə şirəsi, siqara börəyi, simit, meyvə",
    },
    {
      name: "Pomidor Yumurta",
      price: "6 AZN",
      description: "Yumurta, pomidor, kərə yağı",
    },
    {
      name: "Sadə Omlet",
      price: "4 AZN",
      description: "Yumurta, kərə yağı",
    },
    {
      name: "Göbələkli Omlet",
      price: "6 AZN",
      description: "Yumurta, göbələk",
    },
    {
      name: "Pendirli Omlet",
      price: "6 AZN",
      description: "Yumurta, süd, holland pendiri",
    },
    {
      name: "Kükü",
      price: "5 AZN",
      description: "Qarışıq göyərti, yumurta, kərə yağı",
    },
  ],
  "Qəlyanaltılar": [
    {
      name: "Toyuq Nuggets",
      price: "12 AZN",
      description: "Toyuq file, un, suxari, yumurta, ketçup, mayonez, kartof fri",
    },
    {
      name: "Pendir Çubuqları",
      price: "12 AZN",
      description: "Mozarella pendiri, suxari, un, yumurta, qarışıq göyərti",
    },
    {
      name: "Arancini",
      price: "8 AZN",
      description:
        "Mozarella pendiri, parmesan pendiri, düyü, yumurta, suxari, pomidor, qarışıq göyərti, sarımsaq",
    },
    {
      name: "Soğan Halqaları",
      price: "6 AZN",
      description: "Soğan halqası, qarışıq göyərti, turşu xiyar, sarımsaq, mayonez",
    },
    {
      name: "Düşbərə Qızardılmış",
      price: "6 AZN",
      description: "Düşbərə, qarışıq göyərti, pul bibər, mayonez, ketçup",
    },
    {
      name: "Saçaqlı Pendir Qızartma",
      price: "6 AZN",
      description: "Saçaqlı pendir, limon",
    },
    {
      name: "Panko Krevetka",
      price: "14 AZN",
      description: "Balıq krevetka, un, suxari, yumurta",
    },
    {
      name: "Gürzə Qızartması",
      price: "10 AZN",
      description: "Gürzə, mayonez, ketçup, pul bibər",
    },
    {
      name: "Bruschetta Miks",
      price: "16 AZN",
      description: "Göbələk, qaymaq, soğan, sarımsaq, pomidor, göyərti, qızıl balıq, ispanaq",
    },
    {
      name: "Pendir Assorti",
      price: "15 AZN",
      description: "Çedar, qauda, ağ pendir, pormezan, saçaq pendir, qarqanzola",
    },
    {
      name: "Turşu Assorti",
      price: "6 AZN",
      description:
        "Turşu xiyar, turşu çeri pomidor, qırmızı kələm turşusu, alça turşusu, pərpətöyün turşusu",
    },
    {
      name: "Zeytun Assorti",
      price: "6 AZN",
      description: "Yaşıl zeytun, qara zeytun, arigano, pul bibər, zeytun yağı",
    },
    {
      name: "Tərəvəz Buketi",
      price: "8 AZN",
      description: "Pomidor, xiyar, qarışıq göyərti, acı bibər",
    },
    {
      name: "Acıka",
      price: "5 AZN",
      description: "Tomat, pomidor, sarımsaq, qarğıdalı yağı, qarışıq göyərti",
    },
    {
      name: "Haydari",
      price: "6 AZN",
      description: "Qatıq, zeytun yağı, kərə yağı, sarımsaq, quru nanə",
    },
    {
      name: "Vişnəli Əzmə",
      price: "6 AZN",
      description: "Vişnə, zoğal turşusu, qarışıq göyərti, sarımsaq",
    },
    {
      name: "Toyuq Əzməsi",
      price: "8 AZN",
      description: "Toyuq file, qarışıq göyərti, badımcan, sarımsaq, qoz, qaymaq, zeytun yağı",
    },
    {
      name: "Humus",
      price: "6 AZN",
      description: "Noxud, zeytun yağı, limon, sarımsaq",
    },
    {
      name: "Saçaq Pendir",
      price: "6 AZN",
      description: "Pendir saçaqlı, limon",
    },
  ],
  "Salatlar və Şorbalar": [
    {
      name: "Sezar Salatı Krevet İlə",
      price: "18 AZN",
      description:
        "Krevetka, balıq filesi, parmesan pendiri, buruq kahı, aysberq kələmi, çerri pomidor, suxari, sarımsaq, limon, sezar sousu, zeytun yağı, qarğıdalı yağı",
    },
    {
      name: "Sezar Salatı Toyuq İlə",
      price: "14 AZN",
      description:
        "Toyuq filesi, parmesan pendiri, buruq kahı, aysberq kələmi, çerri pomidor, suxari, sezar sousu, qarğıdalı yağı, zeytun yağı, limon, sarımsaq",
    },
    {
      name: "Yunan Salatı",
      price: "10 AZN",
      description: "Pomidor, xiyar, rəngli bibər, ağ pendir, qara zeytun, limon, aysberq kələmi, zeytun yağı",
    },
    {
      name: "Çoban Salatı",
      price: "8 AZN",
      description: "Xiyar, pomidor, göyərti, qırmızı soğan, limon, qarğıdalı yağı",
    },
    {
      name: "Thai Salat",
      price: "18 AZN",
      description:
        "Qırmızı kələm, can əti, qırmızı soğan, aysberq kələmi, kahı, rəngli bibər, pomidor, xiyar, qarğıdalı yağı, zeytun yağı",
    },
    {
      name: "Tərəvəzli Toyuq Salatı",
      price: "10 AZN",
      description:
        "Badımcan, rəngli bibər, çeri pomidor, xiyar, göyərti, göbələk, konserv qarğıdalı, toyuq file, zeytun yağı",
    },
    {
      name: "Xırçıldayan Badımcan Salatı",
      price: "11 AZN",
      description: "Badımcan, rəngli bibər, sarımsaq, narşərab, zəncəfil, nişasta",
    },
    {
      name: "Qırmızı Qızıl Balıq Salatı",
      price: "18 AZN",
      description: "Qızıl balıq, qırmızı soğan, çuğundur, narşərab, göyərti, zoğal turşusu, qarğıdalı yağı, avokado",
    },
    {
      name: "Kinoa Salatı",
      price: "10 AZN",
      description: "Qırmızı lobya konserv, noxud, göyərti, çeri pomidor, xiyar, rəngli bibər, zeytun yağı, limon, portağal",
    },
    {
      name: "Albalılı Pomidor Salatı",
      price: "11 AZN",
      description: "Albalı, göyərti, pomidor, zoğal turşusu",
    },
    {
      name: "Düşbərə Şorbası",
      price: "7 AZN",
      description: "Düşbərə, kərə yağı, üzüm sirkəsi, quru nanə",
    },
    {
      name: "Toyuq Şorbası",
      price: "7 AZN",
      description: "Toyuq file, qarğıdalı yağı, kök, soğan, kartof, qarışıq göyərti",
    },
    {
      name: "Mərci Şorbası",
      price: "6 AZN",
      description: "Qırmızı mərci, soğan, kök, qarğıdalı yağı",
    },
    {
      name: "Tomat Şorbası",
      price: "7 AZN",
      description: "Pomidor, parmesan pendiri, soğan, sarımsaq, qaymaq, ariqana",
    },
    {
      name: "Göbələk Şorbası",
      price: "7 AZN",
      description: "Göbələk, qaymaq, soğan, süd, qarğıdalı yağı",
    },
  ],
  "Əsas Yeməklər": [
    {
      name: "Xəngəl Seti (2 nəfərlik)",
      price: "30 AZN",
      description:
        "Yayma xəngəl - 2 ədəd, Gürcü xəngəli - 8 ədəd (bişmiş), 2 qatıq, 2 acika, Turşu assorti, Duşes - 1 ədəd",
    },
    {
      name: "Xəngəl Seti (4 nəfərlik)",
      price: "55 AZN",
      description:
        "Yayma xəngəl - 4 ədəd, Gürcü xəngəli - 8 ədəd (bişmiş), Gürcü xəngəli - 4 ədəd (qızardılmış), 2 qatıq, 2 acika, Turşu assorti, Duşes - 2 ədəd",
    },
    {
      name: "Yarpaq Dolması",
      price: "14 AZN",
      description: "Yumru düyü, üzüm yarpağı, kərə yağı, göyərti, quzu əti, qatıq",
    },
    {
      name: "Qızıl Balıq Steyk",
      price: "32 AZN",
      description: "Qızıl balıq filesi, qarışıq tərəvəz, göyərti, ispanaq, qarğıdalı yağı, kərə yağı",
    },
    {
      name: "Çolpa Tabaka",
      price: "20 AZN",
      description: "Toyuq çolpa, göyərti, pomidor, kahı, kartof, pul bibər, qarğıdalı yağı, kərə yağı",
    },
    {
      name: "Toyuq Fajitas",
      price: "12 AZN",
      description: "Toyuq file, qırmızı lobya konserv, rəngli bibər, soğan, pul bibər, ketçup, qarğıdalı yağı",
    },
    {
      name: "Mal Əti İlə Fajitas",
      price: "18 AZN",
      description: "Can əti, qırmızı lobya konserv, rəngli bibər, soğan, pul bibər, ketçup, qarğıdalı yağı",
    },
    {
      name: "Toyuq Şnitzel",
      price: "14 AZN",
      description: "Toyuq file, göyərti, kartof, suxari, un, ketçup, mayonez",
    },
    {
      name: "Qaymaqlı Dana Əti",
      price: "26 AZN",
      description: "Dana əti, göbələk, soğan, göyərti, rəngli bibər, kök, düyü, qaymaq, qarğıdalı yağı",
    },
    {
      name: "Asiya Sayağı Toyuq",
      price: "15 AZN",
      description: "Toyuq file, rəngli bibər, göyərti, uzun düyü, nişasta, küncüt",
    },
    {
      name: "Medalyon Steyk",
      price: "33 AZN",
      description:
        "Can əti, rəngli bibər, badımcan, göyərti, göbələk, sarımsaq, pomidor, qaymaq, qarğıdalı yağı, kərə yağı",
    },
    {
      name: "Nar Souslu Quzu Qovurma",
      price: "20 AZN",
      description: "Quzu əti, soğan, kartof, göyərti, nar, zoğal turşusu, qarğıdalı yağı, kərə yağı",
    },
    {
      name: "Nar Souslu Can Əti Qovurma",
      price: "22 AZN",
      description: "Can əti, soğan, kartof, göyərti, nar, zoğal turşusu, qarğıdalı yağı, kərə yağı",
    },
    {
      name: "Toyuq Filesi Steak",
      price: "20 AZN",
      description:
        "Toyuq file, rəngli bibər, göbələk, göyərti, çeri pomidor, çedar pendiri, qaymaq, kərə yağı",
    },
    {
      name: "Julyen",
      price: "9 AZN",
      description: "Toyuq file, soğan, göbələk, mozarella pendiri, un, qaymaq, qarğıdalı yağı",
    },
    {
      name: "Dana Lokum",
      price: "26 AZN",
      description:
        "Dana əti, rəngli bibər, qarğıdalı konserv, göyərti, çeri pomidor, qarğıdalı yağı, kərə yağı",
    },
    {
      name: "Toyuq Kababı",
      price: "10 AZN",
      description: "Toyuq, pomidor, soğan, göyərti, tomat, qarğıdalı yağı",
    },
    {
      name: "Lülə",
      price: "15 AZN",
      description: "Quzu əti, soğan, pomidor, göyərti",
    },
    {
      name: "Tikə",
      price: "15 AZN",
      description: "Quzu əti, soğan, pomidor, göyərti",
    },
    {
      name: "Dana Basdırma",
      price: "15 AZN",
      description: "Dana əti, pomidor, soğan, göyərti, lavaş, kivi, limon",
    },
    {
      name: "Antrikot",
      price: "15 AZN",
      description: "Antrikot, pomidor, soğan, göyərti, lavaş",
    },
    {
      name: "Tərəvəz Kababı",
      price: "8 AZN",
      description: "Bibər, badımcan, pomidor",
    },
    {
      name: "Quzu Sac",
      price: "32 AZN",
      description:
        "Quzu əti, badımcan, rəngli bibər, pomidor, göbələk, kartof, soğan, kərə yağı, qarğıdalı yağı",
    },
    {
      name: "Qarışıq Sac",
      price: "45 AZN",
      description:
        "Can əti, quzu əti, toyuq çolpa, badımcan, rəngli bibər, göbələk, kartof, pomidor, soğan, qarğıdalı yağı, kərə yağı",
    },
    {
      name: "Külləmə Kartof",
      price: "6 AZN",
      description: "Quzu əti, kartof, pomidor, soğan, göyərti, lavaş",
    },
    {
      name: "Qarışıq Kabab (2 Nəfərlik)",
      price: "38 AZN",
      description: "Quzu əti, toyuq əti, göyərti, pomidor, soğan, badımcan, bibər, tomat",
    },
    {
      name: "Qarışıq Kabab (Set)",
      price: "72 AZN",
      description:
        "Albalı pomidor salatı, Çoban salatı, Ağ pendir, Albalı əzməsı, Humus, Haydari, Acika (hər biri 1 pors). Toyuq lüləsi, Quzu lüləsi, Tikə kabab, Toyuq kababı, Dana bastırma (hər biri 4 ədəd). Pomidor, Badımcan, Acı bibər (hər biri 4 ədəd). 1 ədəd kompot.",
    },
    {
      name: "Sac Can Əti",
      price: "36 AZN",
      description:
        "Can əti, pomidor, kartof, soğan, badımcan, rəngli bibər, göbələk, lavaş, qarğıdalı yağı, kərə yağı",
    },
    {
      name: "Sac Kənd Çolpası",
      price: "28 AZN",
      description:
        "Toyuq çolpa, pomidor, soğan, kartof, badımcan, rəngli bibər, göbələk, qarğıdalı yağı, kərə yağı",
    },
    {
      name: "Püre",
      price: "6 AZN",
      description: "Qarnir",
    },
    {
      name: "Kartof Fri",
      price: "6 AZN",
      description: "Qarnir",
    },
    {
      name: "Evsayağı Kartof",
      price: "6 AZN",
      description: "Qarnir",
    },
    {
      name: "Düyü",
      price: "6 AZN",
      description: "Qarnir",
    },
    {
      name: "Qrildə Tərəvəzlər",
      price: "6 AZN",
      description: "Qarnir",
    },
  ],
  "Pizza, Pasta və Burgerlər": [
    {
      name: "Spagetti Bolonez",
      price: "16 AZN",
      description:
        "Spagetti barilla, dana əti, kök, parmesan pendiri, soyulmuş pomidor, soğan, sarımsaq, rəngli bibər, göyərti, qarğıdalı yağı",
    },
    {
      name: "Penne Arrabiata",
      price: "13 AZN",
      description:
        "Makaron Barilla, bolqar bibəri, toyuq bulyonu, pul bibər, parmesan pendir, soyulmuş pomidor, soğan, çerri pomidor, qaymaq",
    },
    {
      name: "Fettuccine Alfredo",
      price: "15 AZN",
      description:
        "Fettuçini, şampinyon göbələk, qaymaq, toyuq filesi, sarımsaq, göyərti, pendir parmesan, qarğıdalı yağı",
    },
    {
      name: "Fettuccine Salmon",
      price: "25 AZN",
      description:
        "Fettuçini, qızıl balıq, pendir parmesan, göyərti, sarımsaq, göbələk, qaymaq, qarğıdalı yağı",
    },
    {
      name: "Rizotto Göbələkli",
      price: "11 AZN",
      description: "Düyü rizotto, göbələk, pendir parmesan, sarımsaq, soğan, zəfəran, qarğıdalı yağı, kərə yağı",
    },
    {
      name: "Klab Sendviç",
      price: "14 AZN",
      description:
        "Toyuq filesi, kolbasa, yumurta, turşu xiyar, pomidor, ketçup, mayonez, pendir gauda, kahı, sarımsaq, kartof fri, tost çörəyi, zeytun yağı",
    },
    {
      name: "Sezar Roll",
      price: "12 AZN",
      description:
        "Toyuq file, balıq file, kahı, çeri pomidor, sarımsaq, limon, parmesan pendiri, mayonez, ketçup, lavaş, zeytun yağı",
    },
    {
      name: "Şaurma Toyuq",
      price: "10 AZN",
      description: "Toyuq file, turşu xiyar, yumurta, sarımsaq, ketçup, mayonez, zeytun yağı, lavaş, kartof fri",
    },
    {
      name: "Toyuq Burger",
      price: "14 AZN",
      description: "Toyuq file, turşu xiyar, sarımsaq, pomidor, kahı, yumurta, mayonez, ketçup, kartof fri",
    },
    {
      name: "Hamburger",
      price: "17 AZN",
      description: "Dana əti, quzu əti, turşu xiyar, pomidor, yumurta, kahı, ketçup, mayonez, zeytun yağı, kartof fri",
    },
    {
      name: "Çizburger",
      price: "18 AZN",
      description:
        "Dana əti, quzu əti, turşu xiyar, pomidor, yumurta, kahı, çedar pendiri, ketçup, mayonez, zeytun yağı, kartof fri",
    },
    {
      name: "Pizza Polo Fungi",
      price: "15 AZN",
    },
    {
      name: "Pizza Marqarita",
      price: "13 AZN",
    },
    {
      name: "Pizza Salami",
      price: "18 AZN",
    },
    {
      name: "Pizza Tərəvəzli",
      price: "14 AZN",
    },
    {
      name: "Pizza Miks",
      price: "20 AZN",
    },
    {
      name: "Pizza Sezar",
      price: "20 AZN",
    },
  ],
  "Desertlər": [
    {
      name: "Milli Paxlava",
      price: "10 AZN",
    },
    {
      name: "Qarışıq Çərəz",
      price: "12 AZN",
    },
    {
      name: "Qarışıq Dondurma",
      price: "6 AZN",
    },
    {
      name: "Künəfə",
      price: "9 AZN",
    },
    {
      name: "Meyvə Assorti",
      price: "14 AZN",
    },
    {
      name: "Tiramisu",
      price: "12 AZN",
    },
    {
      name: "Ballı Tort",
      price: "11 AZN",
    },
    {
      name: "San Sebastian",
      price: "10 AZN",
    },
    {
      name: "Şokolad Vulkan",
      price: "12 AZN",
    },
  ],
  "İçkilər (Sərin və İsti)": [
    {
      name: "Coca Cola / Sprite / Fanta (0.33)",
      price: "6 AZN",
    },
    {
      name: "Ice Tea",
      price: "6 AZN",
    },
    {
      name: "Su Qazlı/Qazsız (0.5)",
      price: "5 AZN",
    },
    {
      name: "Sarıkız",
      price: "4 AZN",
    },
    {
      name: "Red Bull",
      price: "9 AZN",
    },
    {
      name: "Tonic",
      price: "7 AZN",
    },
    {
      name: "Kompot (1 lt)",
      price: "10 AZN",
    },
    {
      name: "Gürcü Limonadı",
      price: "6 AZN",
    },
    {
      name: "Meyvə Şirəsi (25 cl)",
      price: "5 AZN",
    },
    {
      name: "Fresh Şirəsi Portağal (250 ml)",
      price: "11 AZN",
    },
    {
      name: "Çay Dəstgahı",
      price: "35 AZN",
    },
    {
      name: "Çay Çaynikdə",
      price: "10 AZN",
    },
    {
      name: "Amerikano",
      price: "6 AZN",
    },
    {
      name: "Kapuchino",
      price: "8 AZN",
    },
    {
      name: "Latte",
      price: "9 AZN",
    },
    {
      name: "Ice Coffee",
      price: "11 AZN",
    },
    {
      name: "Espresso",
      price: "5 AZN",
    },
    {
      name: "Double Espresso",
      price: "6 AZN",
    },
    {
      name: "Türk Qəhvəsi",
      price: "5 AZN",
    },
    {
      name: "Irish Alkoqollu",
      price: "14 AZN",
    },
    {
      name: "İce Kofe",
      price: "8 AZN",
    },
  ],
  "Bar Menyusu": [
    {
      name: "Margarita",
      price: "15 AZN",
      description: "Cointreau, tekila, limon suyu, şəkər",
    },
    {
      name: "Bloody Mary",
      price: "12 AZN",
      description: "Tomat şirəsi, vodka, tabasko, volçester sous, duz, limon, istiot",
    },
    {
      name: "Tequila Sunrise",
      price: "12 AZN",
      description: "Tekila, portağal şirəsi, grenadine",
    },
    {
      name: "Sex On The Beach",
      price: "14 AZN",
      description: "Vodka, cointreau, portağal şirəsi, grenadine, tekila",
    },
    {
      name: "Pina Colada",
      price: "15 AZN",
      description: "Ananas şirəsi, bacardi, malibu, süd",
    },
    {
      name: "Mojito",
      price: "15 AZN",
      description: "Limon şirəsi, Moxito siropu, bacardi, qazlı su, nanə, buz",
    },
    {
      name: "Long Island Ice Tea",
      price: "18 AZN",
      description: "Kola, bacardi, gordon gin, cointreau, tekila, vodka, limon",
    },
    {
      name: "Gin Tonic",
      price: "13 AZN",
      description: "Gordon gin, limon suyu, schweppes",
    },
    {
      name: "Efes",
      price: "8 AZN",
    },
    {
      name: "Miller",
      price: "9 AZN",
    },
    {
      name: "Heineken",
      price: "9 AZN",
    },
    {
      name: "Corona",
      price: "10 AZN",
    },
    {
      name: "Xırdalan",
      price: "7 AZN",
    },
    {
      name: "Xan Yubiley (4 cl)",
      price: "5 AZN",
    },
    {
      name: "Xan Almaz (0.7)",
      price: "65 AZN",
    },
    {
      name: "Xan 1860 (0.7)",
      price: "105 AZN",
    },
    {
      name: "Smirnoff Red (4 cl)",
      price: "6 AZN",
    },
    {
      name: "Finlandiya (1 lt)",
      price: "95 AZN",
    },
    {
      name: "Russian Standart Platinum (1 lt)",
      price: "85 AZN",
    },
    {
      name: "Viski Blue Label (0.7 lt)",
      price: "500 AZN",
    },
    {
      name: "Jamesson (1 L)",
      price: "175 AZN",
    },
    {
      name: "Jack Daniels (4 cl)",
      price: "10 AZN",
    },
    {
      name: "Jameson (4 cl)",
      price: "7 AZN",
    },
    {
      name: "Red Label (4 cl)",
      price: "7 AZN",
    },
    {
      name: "Black Label (4 cl)",
      price: "10 AZN",
    },
    {
      name: "Gold Label (4 cl)",
      price: "10 AZN",
    },
    {
      name: "Chivas Regal 12 (4 cl)",
      price: "10 AZN",
    },
    {
      name: "Chivas Regal 18 (0.75 lt)",
      price: "200 AZN",
    },
    {
      name: "Chivas Regal 18 (4 cl)",
      price: "18 AZN",
    },
    {
      name: "Jameson (0.7 l)",
      price: "115 AZN",
    },
    {
      name: "Jack Daniels (0.7 l)",
      price: "140 AZN",
    },
    {
      name: "Viski J&B (4 cl)",
      price: "7 AZN",
    },
    {
      name: "Xan VSOP (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Xan XO (4 cl)",
      price: "15 AZN",
    },
    {
      name: "Remy Martin VSOP (4 cl)",
      price: "18 AZN",
    },
    {
      name: "Hennesy VSOP (4 cl)",
      price: "17 AZN",
    },
    {
      name: "Hennesy XO",
      price: "20 AZN",
    },
    {
      name: "Likor Absent Xenta (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Amaretto (4 cl)",
      price: "6 AZN",
    },
    {
      name: "Baileys (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Safari",
      price: "6 AZN",
    },
    {
      name: "Kahlua (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Drambuie (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Sheridan's (4 cl)",
      price: "6 AZN",
    },
    {
      name: "Cointreau (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Archers (4 cl)",
      price: "6 AZN",
    },
    {
      name: "Malibu (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Likor Campari (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Martini Bianco (4 cl)",
      price: "6 AZN",
    },
    {
      name: "Martini Rosso (4 cl)",
      price: "6 AZN",
    },
    {
      name: "Martini Extra Dry (4 cl)",
      price: "6 AZN",
    },
    {
      name: "Olmeca Blanco",
      price: "8 AZN",
    },
    {
      name: "Olmeca Gold (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Sierra Silver (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Tequila Patron Reposado",
      price: "220 AZN",
    },
    {
      name: "Bacardi Superior",
      price: "7 AZN",
    },
    {
      name: "Bacardi Black",
      price: "7 AZN",
    },
    {
      name: "Captain Morgan (4 cl)",
      price: "7 AZN",
    },
    {
      name: "Prosecco",
      price: "80 AZN",
    },
    {
      name: "Xan Jemchujina",
      price: "50 AZN",
    },
    {
      name: "Yeni Raki",
      price: "8 AZN",
    },
    {
      name: "Tekirdag Raki",
      price: "135 AZN",
    },
    {
      name: "Gordons",
      price: "8 AZN",
    },
    {
      name: "Bombay Sapphire (4 cl)",
      price: "8 AZN",
    },
    {
      name: "Qarabağ Merlot (75 cl)",
      price: "55 AZN",
    },
    {
      name: "Qarabağ Cabernet Sauvignon (75 cl)",
      price: "55 AZN",
    },
    {
      name: "Qarabağ Merlot (150 cl)",
      price: "14 AZN",
    },
    {
      name: "Meysəri Mərcan (75 cl)",
      price: "55 AZN",
    },
    {
      name: "Terra Leone (750 ml)",
      price: "60 AZN",
    },
    {
      name: "Göygöl Merlot (15 cl)",
      price: "11 AZN",
    },
    {
      name: "Göygöl Merlot (75 cl)",
      price: "28 AZN",
    },
    {
      name: "Meysəri Məxməri (75 cl)",
      price: "55 AZN",
    },
    {
      name: "Savalan Alacante Boushet Reserve (75 cl)",
      price: "70 AZN",
    },
    {
      name: "Savalan Cabernet Merlot (75 cl)",
      price: "50 AZN",
    },
    {
      name: "Savalan Cabernet Merlot (150 cl)",
      price: "14 AZN",
    },
    {
      name: "Terra Leone Sauvignon Blanc (0.75 l)",
      price: "50 AZN",
    },
    {
      name: "Göygöl Chardonnay (0.75)",
      price: "28 AZN",
    },
    {
      name: "Göygöl Chardonnay (0.15)",
      price: "9 AZN",
    },
    {
      name: "Göygöl Rkatsiteli (0.75)",
      price: "28 AZN",
    },
    {
      name: "Göygöl Rkatsiteli (0.15)",
      price: "9 AZN",
    },
    {
      name: "Xan Qarabağ Chardonnay (0.75)",
      price: "40 AZN",
    },
    {
      name: "Xan Qarabağ Sauvignon Blanc (0.75)",
      price: "40 AZN",
    },
    {
      name: "Meysəri Bülluri (75 cl)",
      price: "45 AZN",
    },
    {
      name: "Meysəri Sədəfi (75 cl)",
      price: "45 AZN",
    },
    {
      name: "Meysəri Sənəmi (75 cl)",
      price: "45 AZN",
    },
    {
      name: "Savalan Elisa (75 cl)",
      price: "55 AZN",
    },
    {
      name: "Savalan Viognier (75 cl)",
      price: "40 AZN",
    },
    {
      name: "Savalan Rose (75 cl)",
      price: "40 AZN",
    },
    {
      name: "Xan Qarabağ Ağ (75 cl)",
      price: "40 AZN",
    },
    {
      name: "Xan Qarabağ Rose (75 cl)",
      price: "40 AZN",
    },
    {
      name: "Qarabağ Rose (15 cl)",
      price: "9 AZN",
    },
  ],
  "Qəlyan": [
    {
      name: "Sadə Qəlyan (Misir)",
      price: "35 AZN",
    },
    {
      name: "Sadə Qəlyan (Premium)",
      price: "35 AZN",
    },
    {
      name: "Meyvəli Qəlyan (Qreypfrut)",
      price: "40 AZN",
    },
    {
      name: "Meyvəli Qəlyan (Ananas)",
      price: "55 AZN",
    },
    {
      name: "Meyvəli Qəlyan (Qreypfrut Premium)",
      price: "45 AZN",
    },
    {
      name: "Qəlyan Seti",
      price: "60 AZN",
      description: "Qreypfrut qəlyan, Qarışıq çərəz, Paxlava, 2 çaynik çay",
    },
  ],
};

const placeholderImage = "/placeholder.svg";

const categories = Object.keys(menuData);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const menuTopRef = useRef<HTMLDivElement | null>(null);
  const activeItems = menuData[activeCategory as keyof typeof menuData];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    menuTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative pt-24">
        <div className="absolute inset-0 bg-gradient-mist" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.p
            className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kulinariya Kolleksiyası
          </motion.p>
          
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="italic">Menyu</span>
          </motion.h1>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="container-custom py-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`whitespace-nowrap px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 rounded-full border ${
                  activeCategory === category
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl" ref={menuTopRef}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-8 flex items-center gap-4">
              {activeCategory}
              {activeCategory === "Əsas Yeməklər" && (
                <Flame className="w-6 h-6 text-gold" />
              )}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {activeItems.map((item, index) => {
                const description = item.description?.trim() || "-";

                return (
                <motion.div
                  key={item.name}
                  className="menu-card group flex h-full flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-mist">
                    <img
                      src={placeholderImage}
                      alt={`${item.name} şəkli`}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="font-display text-xl group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Tərkibi: {description}
                    </p>
                    <span className="mt-auto font-mono text-lg font-semibold text-gold">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-mist">
        <div className="container-custom text-center">
          <p className="text-muted-foreground text-sm font-mono">
            Qiymətlər AZN-dir və ƏDV daxildir. Menyu məhsulları mövcudluğa tabedir.
          </p>
        </div>
      </section>
    </>
  );
};

export default Menu;
