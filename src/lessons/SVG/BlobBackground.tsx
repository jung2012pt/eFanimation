// src/components/BlobBackground.tsx

const BlobBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="scene w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMinYMid slice"
      >
        <defs>
          <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stop-color="#f19872" />
            <stop offset="1" stop-color="#e86c9a" />
          </linearGradient>
          <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stop-color="#0947db" />
            <stop offset="1" stop-color="#07d89d" />
          </linearGradient>
          <linearGradient id="gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stop-color="#ee2d29" />
            <stop offset="1" stop-color="#f8ae2c" />
          </linearGradient>
          <linearGradient id="gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stop-color="#3a3d98" />
            <stop offset="1" stop-color="#6f22b9" />
          </linearGradient>
          <linearGradient id="gradient-5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stop-color="#9d316e" />
            <stop offset="1" stop-color="#de2d3e" />
          </linearGradient>
          <linearGradient id="gradient-6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stop-color="#00ac53" />
            <stop offset="1" stop-color="#23c3e0" />
          </linearGradient>
        </defs>
        <g className="blob-1">
          <path
            d="M 382.9,69.64 C 375.1,14.22 296.4,-55.5 243.8,-46.79 191.2,-38.08 156.2,-36.94 118.6,-50.49 80.98,-64.04 52.11,-60.24 17.7,-25.44 -16.71,9.355 -52.82,94.93 -55.27,139.3 -57.72,183.7 -49.76,192.9 -19.05,201.3 11.66,209.7 54.92,201.4 92.87,229.8 130.8,258.2 166.4,326.2 204.1,345.9 241.8,365.6 259.2,351.7 284.3,318.5 309.4,285.3 344.5,223.8 362.8,182.2 381.1,140.6 390.7,125.1 382.9,69.64 Z"
            data-pathid="M 5153,15.13 C 5039,-791.7 3862,-1807 3080,-1680 2294,-1552 1772,-1536 1211,-1733 649,-1930 218.2,-1875 -295.2,-1369 -807.6,-862 -1347,382.9 -1383,1028 -1420,1675 -1302,1809 -843.9,1931 -385.4,2053 260.6,1933 826.6,2345 1391,2758 1924,3749 2487,4035 3049,4321 3308,4119 3682,3635 4058,3153 4581,2258 4854,1653 5127,1047 5271,821 5153,15.13 Z"
          />
          <path
            d="M 334.7,65.61 C 325.3,7.593 270.9,-34.46 218.5,-24.5 172.3,-15.71 125.4,-34.55 78.72,-32.93 47.06,-31.83 19.45,-9.456 0.2296,18.39 -25.16,55.18 -48.95,99.72 -44.87,147.7 -42.59,174.6 -14.84,187.6 8.083,186.8 43.43,185.5 81.49,185.3 113.3,207.7 149.3,233 174.3,278.3 216.4,291.8 245.2,301 273.1,277.4 290.9,252.8 328.2,201.4 345.4,131.6 334.7,65.61 Z"
            data-pathid="M 4434,-44.03 C 4293,-887.2 3482,-1499 2701,-1354 2012,-1227 1312,-1500 615.5,-1477 142.6,-1462 -269,-1137 -555.8,-730.8 -935.1,-195.7 -1289,452.3 -1230,1150 -1194,1541 -780,1732 -438.8,1719 88.59,1702 657.1,1697 1131,2023 1670,2392 2042,3051 2671,3246 3100,3381 3516,3037 3782,2680 4338,1933 4594,916 4434,-44.03 Z"
          />
          <path
            d="M 301.9,109.3 C 293.3,47.28 237.7,6.176 183,4.292 145.9,3.015 112.1,-30.68 74.57,-21.98 34.9,-12.78 7.294,25.18 -14.63,60.94 -31.83,88.99 -48.3,127.3 -33.65,159.7 -23.55,182 5.521,181.2 25.57,177 78.49,166 132.1,191.4 170.7,232.8 188.4,251.7 212.7,272.9 238.5,266.6 270.8,258.7 289.6,222 298.2,188.1 304.7,162.7 305.6,135.5 301.9,109.3 Z"
            data-pathid="M 3945,591.6 C 3818,-310.8 2988,-908.9 2170,-935.4 1618,-953.9 1113,-1444 553.6,-1318 -38.52,-1184 -450.6,-632.1 -777.1,-111.6 -1035,296.3 -1280,853.2 -1061,1324 -911.5,1651 -477,1639 -177.4,1578 612.1,1417 1412,1787 1988,2391 2252,2663 2615,2972 2999,2879 3481,2766 3761,2232 3891,1739 3987,1369 4001,973.5 3945,591.6 Z"
          />
          <path
            d="M 270.4,134.6 C 261.3,81.3 218.6,43.99 174.5,26.82 143.8,14.87 112.1,-6.204 79.55,4.503 28.51,21.31 -15.53,68.11 -29.07,126.5 -32.74,142.3 -24.82,163.4 -8.561,165.9 28.45,171.7 65.61,154.5 102.4,169 144.1,185.5 173.6,227.9 216.1,241.9 241.4,250.2 263.3,218.9 267.7,191.8 270.8,173 273.7,153.5 270.4,134.6 Z"
            data-pathid="M 3476,960.3 C 3339,184.5 2702,-358.8 2044,-608.5 1587,-781.2 1113,-1088 627.8,-933.3 -133.9,-687.9 -790.9,-7.384 -993,842.2 -1048,1072 -929.2,1380 -686.7,1416 -134.6,1501 419.9,1250 968.6,1462 1591,1702 2030,2318 2666,2521 3043,2642 3369,2188 3434,1793 3481,1520 3526,1235 3476,960.3 Z"
          />
          <path
            d="M 229.8,128.8 C 219.9,79.76 177.5,48.4 135.7,37.08 107.6,29.47 77.51,16.26 50.19,30.71 15.21,49.21 -17.25,84.68 -19.56,130.1 -20.49,148.3 -1.181,158.1 12.81,156.9 54.23,153.4 97.99,150.9 137.1,171.2 160,183.1 183.3,204.3 209.2,198.6 228.3,194.4 233.1,167.4 231.8,148.1 231.3,141.6 231.1,135.1 229.8,128.8 Z"
            data-pathid="M 2870,875.1 C 2721,162 2089,-294.5 1466,-458.8 1047,-569.7 597.1,-761.2 189.4,-551.2 -332.2,-282.3 -816.4,233.3 -850.7,895.2 -864.5,1158 -576.8,1301 -368.5,1285 249.9,1234 902.6,1198 1487,1493 1829,1667 2176,1974 2562,1892 2847,1829 2920,1439 2901,1157 2891,1062 2890,967.4 2870,875.1 Z"
          />
          <path
            d="M 200.5,139 C 193.3,94.06 156.4,62.79 118.8,51.33 93.26,43.54 64.65,33.02 39.95,47.98 14.83,63.19 -8.802,89.75 -10.59,123.7 -11.24,136 -3.241,146.5 7.448,149.2 27.58,154.4 47.84,148.7 68.23,150 102,152.2 134.8,162.2 166.7,174.9 178.5,179.6 194.3,175.5 199.1,161 201.4,154.1 201.7,146.3 200.5,139 Z"
            data-pathid="M 2432,1023 C 2325,370.1 1775,-85.13 1214,-251.5 831.7,-365.3 405.3,-518.1 36.61,-300.3 -338.1,-78.65 -690.2,307.2 -716.7,801.3 -727.3,979.5 -607.2,1133 -448,1172 -147.8,1248 154.5,1165 458.7,1184 962.8,1216 1453,1361 1928,1547 2103,1616 2340,1555 2412,1343 2446,1244 2450,1130 2432,1023 Z"
          />
          <path
            d="M 181,126.6 C 174.1,88.88 143,63.51 111.8,52.84 96.72,47.68 81.29,42.27 65.2,44.56 48.48,46.94 34.04,57.55 22.98,71.55 12.53,84.78 0.8786,106.1 11.19,122.3 23.14,141.1 47.82,136.4 66.4,136.9 100.4,137.9 132.8,153.9 166.7,152.9 177.4,152.6 183.1,137.9 181,126.6 Z"
            data-pathid="M 2142,843.1 C 2040,294.9 1574,-74.14 1108,-229.7 884.1,-305 654.1,-383.9 413.9,-350.6 164.3,-315.8 -51.66,-161 -216.3,42.61 -372.4,235.2 -546.1,545.3 -392,780.8 -214.3,1055 154.5,985.6 431.8,993.8 938.2,1008 1422,1241 1928,1225 2088,1221 2172,1008 2142,843.1 Z"
          />
        </g>
        <g className="blob-2">
          <path
            d="M 392.8,547.7 C 427.8,592.2 497.3,600.5 536.4,565.8 561.4,545.7 595.7,539.8 618,516 635.7,498.1 638.6,470.8 637.7,445.6 636.8,425 636.9,404.2 640.7,384.2 645.7,352.9 651.8,320.4 642.8,288.1 629.8,234.1 578.5,188 524,187.1 490.6,186 460.7,202.9 437.5,224.4 411.5,245.9 384.3,266.1 355.4,283.4 329.4,301.4 305.1,326.1 299.7,359.5 294.8,392.4 309.6,425.9 328.3,453.7 348.9,485.7 371.1,516.5 392.8,547.7 Z"
            data-pathid="M -907.7,1516 C -413.5,1881 567.9,1950 1120,1664 1473,1499 1957,1451 2272,1255 2522,1108 2563,884.2 2550,677.2 2538,508 2539,337.1 2593,172.8 2663,-84.28 2749,-351.2 2622,-616.5 2439,-1060 1714,-1439 944.9,-1446 473.3,-1455 51.08,-1316 -276.5,-1140 -643.6,-963.2 -1028,-797.3 -1436,-655.2 -1803,-507.3 -2146,-304.4 -2222,-30.07 -2291,240.2 -2082,515.3 -1818,743.7 -1528,1007 -1214,1260 -907.7,1516 Z"
          />
          <path
            d="M 340.9,428.6 C 353.4,444.4 366.9,459.6 379.5,475.4 403.4,504.3 427.7,533.6 456.8,557.3 489.9,575 531.5,568.6 556.1,543.8 577.6,531.8 603,522 614.9,498.7 630.2,460.2 616.4,415 630.3,376.1 638.9,344.4 645.6,309 632.7,275.9 618.1,227.4 561.8,193.1 515.5,207.3 484.3,217.6 466.6,247.4 441,265.8 407,291.9 363.4,305.4 336.1,339.9 317.5,364.6 321.9,402.7 340.9,428.6 Z"
            data-pathid="M -1640,537.5 C -1464,667.3 -1273,792.2 -1095,921.9 -758,1159 -414.9,1400 -3.984,1595 463.4,1740 1051,1687 1398,1484 1702,1385 2060,1305 2228,1113 2444,797.1 2250,425.8 2446,106.3 2567,-154.1 2662,-444.9 2480,-716.8 2274,-1115 1479,-1397 824.9,-1280 384.3,-1196 134.4,-950.9 -227.1,-799.7 -707.2,-585.3 -1323,-474.4 -1708,-191.1 -1971,11.82 -1909,324.8 -1640,537.5 Z"
          />
          <path
            d="M 364,422.9 C 394.4,463.7 427.7,505 472.9,529.1 501.3,545.1 534.9,541.5 562.1,529.8 580.3,523.3 600.7,514.7 608,495.2 616.7,457.8 605,416.3 619.9,380.5 630.8,351 639.4,318.4 631.4,285.6 625.5,259.5 608.2,233.9 582.7,223.9 556.1,212.3 523.9,216.4 504.6,236.5 471.3,263.8 439.6,294.5 399.5,312 377.2,324.8 354.4,341.5 346.9,367.9 343.9,387.1 352.3,407.1 364,422.9 Z"
            data-pathid="M -1314,490.7 C -885.1,825.8 -414.9,1165 223.3,1363 624.4,1494 1099,1465 1483,1369 1740,1315 2028,1245 2131,1085 2254,777.4 2089,436.5 2299,142.4 2453,-99.89 2574,-367.7 2461,-637.1 2378,-851.5 2134,-1062 1774,-1144 1398,-1239 943.5,-1205 671,-1040 200.8,-816.1 -246.8,-564 -813.1,-420.2 -1128,-315.1 -1450,-177.9 -1556,38.93 -1598,196.6 -1480,360.9 -1314,490.7 Z"
          />
          <path
            d="M 408.3,450.5 C 435.7,490.6 480.5,521.6 527.9,523.4 552.1,523.7 578.3,513.4 587.8,489.9 598.4,457.4 588.6,419.1 605.1,388.6 617,358.2 631.3,326.4 626.7,291.7 625.4,265.1 603.9,241.4 579.2,233.5 562.9,227.8 545.2,230.5 531.6,239.3 489.8,262.6 459.6,301.6 417.1,323.9 399.2,335.6 380.7,351.8 378.5,375.4 377.1,402.8 393.4,428 408.3,450.5 Z"
            data-pathid="M -688.8,717.4 C -301.9,1047 330.7,1301 999.9,1316 1342,1319 1712,1234 1846,1041 1995,774.1 1857,459.5 2090,209 2258,-40.75 2460,-302 2395,-587 2377,-805.5 2073,-1000 1724,-1065 1494,-1112 1244,-1090 1052,-1017 462,-826 35.55,-505.7 -564.5,-322.5 -817.3,-226.4 -1079,-93.31 -1110,100.5 -1129,325.6 -899.2,532.6 -688.8,717.4 Z"
          />
          <path
            d="M 434.2,460.1 C 459.4,497.5 508.6,519.5 549.5,506.1 573.6,496.7 585.5,469.4 584.7,443.4 590.7,393.5 619.2,350 618.4,298.4 617.7,273.1 595.7,246.3 569.9,246.9 540.6,247.7 517.9,267.6 498.5,286.7 467.6,315.7 432.8,343.2 415.3,383.7 408.6,409.5 417.9,438.3 434.2,460.1 Z"
            data-pathid="M -323.1,796.3 C 32.73,1103 727.4,1284 1305,1174 1645,1097 1813,872.7 1802,659.1 1887,249.2 2289,-108.1 2278,-531.9 2268,-739.8 1957,-959.9 1593,-955 1179,-948.4 858.7,-784.9 584.8,-628 148.5,-389.8 -342.9,-164 -590,168.7 -684.6,380.6 -553.3,617.2 -323.1,796.3 Z"
          />
          <path
            d="M 446,458.6 C 471.3,494.2 524.6,510.3 557.7,485.8 573.8,473.9 571.9,450.1 574.8,431.1 579.9,397.6 598.7,369.4 605.6,336.4 609.8,316.6 613,294.3 604.6,274.5 597.6,258 576.8,251.3 560.8,256.8 530.7,267.1 508.3,289.4 485.9,310.3 460.7,333.8 435.9,361.7 429.7,397.7 426.2,418.5 433.3,440.8 446,458.6 Z"
            data-pathid="M -156.5,783.9 C 200.8,1076 953.4,1209 1421,1007 1648,909.6 1621,714.1 1662,558.1 1734,282.9 2000,51.25 2097,-219.8 2156,-382.4 2202,-565.6 2083,-728.3 1984,-863.8 1690,-918.8 1464,-873.6 1039,-789 723.2,-605.9 406.9,-434.2 51.08,-241.2 -299.1,-12 -386.6,283.7 -436.1,454.6 -335.8,637.7 -156.5,783.9 Z"
          />
          <path
            d="M 451.9,456.5 C 474.7,489.7 523.3,505.1 554.4,482.8 566.2,474.4 563.5,457 562.3,443.4 557.8,394.7 589.2,351.4 580.7,303.2 578.3,289.3 558.1,289.3 547.2,293.4 503.5,310 466,342.4 444.9,384.3 434,406 437,434.8 451.9,456.5 Z"
            data-pathid="M -73.17,766.7 C 248.8,1039 935,1166 1374,982.7 1541,913.7 1503,770.8 1486,659.1 1422,259.1 1866,-96.6 1745,-492.5 1712,-606.7 1426,-606.7 1272,-573 655.4,-436.7 125.9,-170.5 -172,173.6 -325.9,351.9 -283.6,588.4 -73.17,766.7 Z"
          />
        </g>
        <g className="blob-3">
          <path
            d="M 173.8,427.1 C 141.9,428.2 110,441.6 88.2,465.2 72.4,482.5 62.6,504.9 59.9,528 57.8,544.1 59,560.4 58.3,576.6 57.7,596.5 55.5,616.6 48.3,635.3 41,655.6 31.4,675.6 29.5,697.4 27.7,717.8 34.7,738.1 45.4,755.3 62.6,783.8 88.7,806.2 117.6,822.4 160.6,846.7 210.5,859.2 259.9,855.9 294.6,853.3 329.3,841.6 356.2,819.1 376.4,802.2 391.6,779.6 400,754.7 411.5,721.5 411.8,685.4 406.2,651 402.6,629.5 396.7,608.3 388.6,588.1 378.4,563.9 362.6,542.2 343,524.8 323.5,506.4 302.7,489.6 282.1,472.6 261.7,456.5 239.9,441 214.9,433 201.6,428.8 187.7,426.9 173.8,427.1 Z"
            data-pathid="M 397.4,-2057 C 43.67,-2047 -310.1,-1933 -551.9,-1731 -727.1,-1583 -835.8,-1391 -865.7,-1193 -889,-1056 -875.7,-916.3 -883.5,-777.8 -890.1,-607.5 -914.5,-435.6 -994.4,-275.6 -1075,-102 -1182,69.08 -1203,255.6 -1223,430.1 -1145,603.7 -1027,750.8 -835.8,994.6 -546.3,1186 -225.8,1325 251.1,1533 804.4,1640 1352,1611 1737,1589 2122,1489 2420,1297 2644,1152 2813,958.7 2906,745.7 3034,461.7 3037,152.9 2975,-141.3 2935,-325.3 2869,-506.6 2780,-679.4 2666,-886.4 2491,-1072 2274,-1221 2058,-1378 1827,-1522 1598,-1667 1372,-1805 1130,-1938 853.2,-2006 705.7,-2042 551.6,-2058 397.4,-2057 Z"
          />
          <path
            d="M 270.9,500.2 C 211.4,463.7 131.3,458.8 96.6,505 67.9,535.1 76.8,555.9 71.2,597 66.7,628.3 39.6,694.8 49.6,728.3 64.9,771.1 104.8,807.1 147.6,827.2 220.4,861.9 308.1,851.5 351,799.8 382.5,762.5 388.1,708.4 375.3,657 362.7,604.3 333.3,550.6 287.7,511.6 282.5,507.3 276.4,503.7 270.9,500.2 Z"
            data-pathid="M 1474,-1431 C 814.4,-1744 -73.88,-1785 -458.7,-1390 -777,-1133 -678.3,-954.8 -740.4,-603.3 -790.3,-335.5 -1091,233.3 -979.9,519.9 -810.3,886 -367.8,1194 106.9,1366 914.2,1663 1887,1574 2363,1131 2712,812.4 2774,349.7 2632,-90.02 2492,-540.8 2166,-1000 1661,-1334 1603,-1371 1535,-1401 1474,-1431 Z"
          />
          <path
            d="M 293.7,543 C 246.1,501.3 173.5,495.7 134.5,530.1 103.6,551.6 102,579 90.1,613.7 80.9,640.3 52.5,673.7 56.2,704.5 62.7,744.3 92.8,782.3 128.2,807 188.2,849.3 269.3,854.8 316.5,817 351.2,789.8 365.1,743.7 362.1,696.9 359.4,648.9 341.7,597.3 307.1,555.6 303,551.1 298.2,546.9 293.7,543 Z"
            data-pathid="M 1727,-1065 C 1199,-1422 394.1,-1470 -38.39,-1176 -381.1,-991.6 -398.8,-757.2 -530.8,-460.4 -632.8,-232.9 -947.8,52.83 -906.7,316.3 -834.7,656.7 -500.8,981.8 -108.3,1193 557.1,1555 1457,1602 1980,1279 2365,1046 2519,651.6 2486,251.3 2456,-159.3 2259,-600.7 1876,-957.4 1830,-995.9 1777,-1032 1727,-1065 Z"
          />
          <path
            d="M 306.5,585.5 C 271.3,542.9 209.4,527.6 170.8,551.4 141,565.4 122.7,593.1 107.5,621.2 95.7,642.6 79.3,662.6 78,689.5 77.9,724.6 98.5,761.5 125.5,787.7 171.3,832.7 240.7,849.2 286.9,823.6 320.8,805.3 339.5,767.9 343.5,727.3 348.1,685.8 340.2,639 316.2,598.2 313.4,593.8 309.8,589.5 306.5,585.5 Z"
            data-pathid="M 1869,-701.6 C 1479,-1066 792.2,-1197 364.2,-993.3 33.69,-873.6 -169.3,-636.6 -337.8,-396.3 -468.7,-213.2 -650.6,-42.12 -665,188 -666.1,488.2 -437.6,803.9 -138.2,1028 369.7,1413 1139,1554 1652,1335 2028,1179 2235,858.6 2279,511.3 2330,156.3 2243,-244 1977,-593 1946,-630.6 1906,-667.4 1869,-701.6 Z"
          />
          <path
            d="M 280.7,608.1 C 246.6,575.5 192.1,568.4 161.1,591.9 136.8,606.5 123.6,631.5 113.1,656.6 105,675.7 92.7,694 94,716.8 97.1,746.3 118.2,775.4 143.7,795 187.1,828.6 248.2,836 285.6,810.2 313,791.7 325.6,758.4 325.4,723.9 325.5,688.6 314.5,650 290.2,617.8 287.4,614.4 284,611.1 280.7,608.1 Z"
            data-pathid="M 1583,-508.3 C 1205,-787.2 600.4,-847.9 256.6,-646.9 -12.89,-522 -159.3,-308.1 -275.7,-93.44 -365.5,69.94 -502,226.5 -487.5,421.5 -453.2,673.9 -219.2,922.8 63.63,1090 544.9,1378 1223,1441 1637,1220 1941,1062 2081,777.4 2079,482.2 2080,180.3 1958,-149.9 1688,-425.3 1657,-454.4 1620,-482.7 1583,-508.3 Z"
          />
          <path
            d="M 276,636.4 C 245.2,609.2 196.1,603.3 168.1,622.9 146.2,635.1 134.3,656 124.8,676.9 117.5,692.9 106.4,708.2 107.6,727.2 110.4,751.8 129.4,776.1 152.4,792.5 191.6,820.5 246.7,826.7 280.4,805.2 305.1,789.7 316.5,761.9 316.3,733.1 316.4,703.6 306.4,671.4 284.5,644.5 282,641.7 278.9,639 276,636.4 Z"
            data-pathid="M 1531,-266.2 C 1189,-498.9 644.7,-549.4 334.2,-381.7 91.36,-277.4 -40.61,-98.58 -146,80.2 -226.9,217.1 -350,347.9 -336.7,510.5 -305.7,720.9 -94.95,928.8 160.1,1069 594.8,1309 1206,1362 1580,1178 1854,1045 1980,807.3 1978,560.9 1979,308.6 1868,33.16 1625,-196.9 1597,-220.9 1563,-244 1531,-266.2 Z"
          />
          <path
            d="M 257.2,650 C 230.7,627.8 188.4,623 164.2,639 145.4,648.9 135.1,666 127,683.1 120.6,696.1 111.1,708.6 112.1,724.2 114.5,744.2 130.9,764.1 150.8,777.5 184.5,800.4 232,805.4 261,787.9 282.4,775.2 292.2,752.5 292,729 292.1,704.9 283.5,678.6 264.6,656.6 262.4,654.3 259.8,652.1 257.2,650 Z"
            data-pathid="M 1322,-149.9 C 1028,-339.8 559.4,-380.9 291,-244 82.49,-159.3 -31.74,-13.04 -121.6,133.2 -192.5,244.4 -297.9,351.4 -286.8,484.8 -260.2,655.9 -78.32,826.1 142.4,940.7 516.1,1137 1043,1179 1364,1030 1602,921.1 1710,726.9 1708,525.9 1709,319.7 1614,94.74 1404,-93.44 1380,-113.1 1351,-131.9 1322,-149.9 Z"
          />
        </g>
        <g className="blob-4">
          <path
            d="M 778.8,689.3 C 754.9,648.4 714.8,625.1 674.8,609.6 610.7,584.7 536.9,587.1 473.7,622.5 455.8,632.5 438,652.5 439.7,676.1 440.7,689.6 454.1,694.4 464,697.6 478.2,702.1 495.8,703.7 504.4,718.9 509.6,728.1 502.1,738.5 495.9,744.7 482.9,757.8 462.4,762.9 455.4,782.5 450.3,796.8 457.2,811.5 462.3,824.1 471.5,847 480.1,870.5 493.1,891 514.4,924.6 545.4,953 583.1,957.3 613.1,960.8 647.6,952.4 668.5,925.6 680.8,909.8 668.1,883.1 682.7,869.2 699,853.8 723.8,862.9 742.6,850.4 757.9,840.3 767,822.3 773.8,804.5 786.8,770.4 793.7,730.6 781.8,696.2 781,693.9 780,691.4 778.8,689.3 Z"
            data-pathid="M 5319,-184.4 C 4818,-613.8 3977,-858.4 3137,-1021 1792,-1283 244.2,-1257 -1082,-885.7 -1457,-780.7 -1831,-570.7 -1795,-322.9 -1774,-181.2 -1493,-130.8 -1285,-97.2 -987.4,-49.95 -618.1,-33.15 -437.7,126.4 -328.6,223.1 -485.9,332.3 -616,397.4 -888.8,534.9 -1319,588.4 -1466,794.2 -1573,944.4 -1428,1099 -1321,1231 -1128,1472 -947.5,1718 -674.8,1934 -227.9,2286 422.5,2585 1213,2630 1843,2666 2567,2578 3005,2297 3263,2131 2997,1851 3303,1705 3645,1543 4165,1638 4560,1507 4881,1401 5072,1212 5214,1025 5487,667.2 5632,249.3 5382,-111.9 5365,-136.1 5344,-162.3 5319,-184.4 Z"
          />
          <path
            d="M 753,704 C 727.4,655.2 681,626 633.8,610.1 577,591 510.2,599.1 460.3,641.1 449.3,650.4 442.5,671.1 452.4,683.2 467.1,701 495.4,693 508.6,712.5 516.9,724.7 507.5,742.6 496.5,750.3 483,759.8 464.4,766.8 460.3,785.6 455.4,808.3 470,827.3 478,846.6 492.2,880.9 515.1,913.8 548,926.1 576.2,936.7 612.4,931.4 633.7,905.5 644,893 638.1,874.5 633.1,860.8 629.7,851.5 622.1,837.2 631,830.6 648.8,817.3 671.4,833.3 692,833.1 715.1,832.8 738.2,818.9 749.6,794.8 762.9,766.7 767.2,731 753,704 Z"
            data-pathid="M 4778,-30 C 4241,-542.4 3267,-849 2277,-1016 1085,-1217 -316,-1131 -1363,-690.4 -1594,-592.8 -1736,-375.4 -1529,-248.4 -1220,-61.5 -626.5,-145.5 -349.6,59.25 -175.4,187.4 -372.6,375.3 -603.4,456.1 -886.7,555.9 -1277,629.4 -1363,826.8 -1466,1065 -1159,1265 -991.6,1467 -693.6,1827 -213.2,2173 477,2302 1069,2413 1828,2358 2275,2086 2491,1955 2367,1760 2262,1616 2191,1519 2032,1369 2218,1299 2592,1160 3066,1328 3498,1326 3983,1322 4467,1176 4707,923.4 4986,628.4 5076,253.5 4778,-30 Z"
          />
          <path
            d="M 733.5,718.1 C 710.1,672.5 666.5,646.6 623.8,629.3 576,609.9 519.6,606.7 472.6,634.7 460.3,642 446.8,660.2 453.9,674.9 464.5,696.6 494,691.8 509.8,707.6 519.5,717.3 515,736.1 504.9,745.3 490.6,758.5 469.3,766 464.2,787.1 459.1,808.2 473.3,826.2 481,844.3 494.1,875.1 516.6,904.3 547.4,912 570.9,917.9 600.9,912.8 616.7,890.6 626.7,876.6 616.8,858.6 613.4,843.6 611.4,834.5 610.7,821.4 620.1,817.1 634.5,810.5 649.8,816.5 664.1,819.2 682.2,822.6 703.9,824.1 718.4,807.8 738.7,785 747.8,745.9 733.5,718.1 Z"
            data-pathid="M 4369,118.1 C 3878,-360.8 2963,-632.7 2067,-814.4 1064,-1018 -118.8,-1052 -1105,-757.6 -1363,-681 -1646,-489.9 -1497,-335.6 -1275,-107.7 -655.9,-158.1 -324.4,7.8 -120.9,109.6 -215.3,307.1 -427.2,403.6 -727.2,542.2 -1174,621 -1281,842.6 -1388,1064 -1090,1253 -928.6,1443 -653.8,1767 -181.7,2073 464.5,2154 957.5,2216 1587,2162 1918,1929 2128,1782 1920,1593 1849,1436 1807,1340 1792,1203 1990,1158 2292,1088 2613,1151 2913,1180 3293,1215 3748,1231 4052,1060 4478,820.5 4669,409.9 4369,118.1 Z"
          />
          <path
            d="M 708.1,726.8 C 684,683.8 642.3,659.6 601.1,642.5 566.4,628.1 526.7,619 490.2,634.7 477.3,640.3 459.3,653.7 462.9,669.2 468.2,691.6 497.4,690 512.3,704.1 524.8,715.9 518.2,740.2 504.8,750.5 490.9,761.2 470.4,770.4 468.7,789.9 466.1,820.5 487.2,845.6 502.3,869.3 517.7,893.4 548.1,901.7 574.7,893.2 586.2,889.5 602,884.2 603.8,868.4 605.8,850.6 596.2,830.9 606.6,814.8 615.2,801.4 632.3,804.1 644.9,806.3 661.6,809.2 681.1,816.1 696.3,803.5 712.4,790.1 717.5,764.3 713.7,743.3 712.6,737.4 710.9,731.8 708.1,726.8 Z"
            data-pathid="M 3836,209.4 C 3330,-242.1 2455,-496.2 1591,-675.7 863.1,-826.9 30.17,-922.5 -735.6,-757.6 -1006,-698.9 -1384,-558.1 -1308,-395.4 -1197,-160.2 -584.5,-177 -271.9,-28.95 -9.696,94.95 -148.2,350.1 -429.3,458.3 -720.9,570.6 -1151,667.2 -1187,871.9 -1241,1193 -798.5,1457 -481.7,1706 -158.7,1959 479.1,2046 1037,1957 1278,1918 1610,1862 1648,1696 1690,1509 1488,1302 1706,1133 1887,992.7 2246,1021 2510,1044 2860,1075 3269,1147 3588,1015 3926,874.1 4033,603.1 3953,382.6 3930,320.7 3895,261.9 3836,209.4 Z"
          />
          <path
            d="M 664.8,728.2 C 631.2,667.3 565,629.4 500.7,642.1 488.1,644.6 471.1,653.5 470.9,669 470.7,684.7 489.7,688 500.7,694 512.5,700.5 523.9,715.8 518.6,732.1 511.3,754.3 488.5,762.1 477.5,780.8 471.2,791.6 476.7,804.4 481.4,814.3 493.3,839.3 507.1,866.2 531.1,876.7 547.9,884.1 571.5,883.2 584,866.6 597.3,849 585.7,821.6 600.2,804.4 613.8,788.2 635,789.7 652.7,786.9 664.8,785 673.2,770.5 671.5,756.8 670.2,746.8 669.4,736.6 664.8,728.2 Z"
            data-pathid="M 2928,224.1 C 2223,-415.4 833.7,-813.3 -515.3,-679.9 -779.7,-653.7 -1136,-560.2 -1141,-397.5 -1145,-232.6 -746.1,-198 -515.3,-135 -267.8,-66.75 -28.58,93.9 -139.8,265.1 -292.9,498.1 -771.3,580.1 -1002,776.4 -1134,889.8 -1019,1024 -920.2,1128 -670.6,1391 -381,1673 122.5,1783 474.9,1861 970.1,1852 1232,1677 1511,1493 1268,1205 1572,1024 1858,854.1 2302,869.9 2674,840.4 2928,820.5 3104,668.2 3068,524.4 3041,419.4 3024,312.3 2928,224.1 Z"
          />
          <path
            d="M 631.8,730.9 C 603.5,677.9 545.7,644.4 490.3,657.6 479.9,660.1 480.3,678 489.7,683.2 503.7,690.8 519.9,701.8 521.7,720.9 523.5,740.1 507.9,754.5 495.5,765.6 486.8,773.3 477.1,786.1 481.5,799.1 490.4,825.5 504.6,850.7 525.9,865.6 540.9,876.1 566.2,876.9 578.1,859.4 590.7,840.9 584.1,813.5 598.8,796.1 610.5,782.3 630.4,780.1 638,762.5 642.6,751.8 636.7,740.1 631.8,730.9 Z"
            data-pathid="M 2235,252.4 C 1641,-304.1 428.8,-655.8 -733.5,-517.2 -951.7,-490.9 -943.3,-303 -746.1,-248.4 -452.4,-168.6 -112.5,-53.1 -74.73,147.4 -36.97,349.1 -364.3,500.3 -624.4,616.8 -806.9,697.6 -1010,832.1 -918.1,968.6 -731.4,1246 -433.5,1510 13.38,1667 328.1,1777 858.9,1785 1109,1602 1373,1407 1234,1120 1543,937.1 1788,792.1 2206,769.1 2365,584.2 2462,471.9 2338,349.1 2235,252.4 Z"
          />
          <path
            d="M 605.4,726 C 583.9,681.3 537.7,649.8 492.2,660.3 481.4,662.8 486.4,681.2 495.3,684.8 508.5,690.1 521.5,701.5 523.5,718.9 525.3,735 516.4,749.5 506.5,760.4 498.9,768.8 489.3,781.1 493.3,793.4 499.6,812.6 515.2,825.6 530.5,835.6 543.1,843.9 564.7,842.9 573,826.4 581.3,809.8 587.6,792 599.3,778.2 607.9,768.1 616,753.3 610.7,739.4 609,734.8 607.4,730.2 605.4,726 Z"
            data-pathid="M 1681,201 C 1230,-268.4 260.9,-599.1 -693.6,-488.9 -920.2,-462.6 -815.3,-269.4 -628.6,-231.6 -351.7,-175.9 -78.93,-56.25 -36.97,126.4 0.794,295.5 -185.9,447.8 -393.6,562.2 -553.1,650.4 -754.5,779.6 -670.6,908.7 -538.4,1110 -211.1,1247 109.9,1352 374.2,1439 827.4,1428 1002,1255 1176,1081 1308,894 1553,749.1 1734,643.1 1904,487.6 1792,341.7 1757,293.4 1723,245.1 1681,201 Z"
          />
        </g>
        <g className="blob-5">
          <path
            d="M 1229,381.2 C 1281,409.5 1344,410.5 1403,415.2 1429,417.7 1458,422.8 1481,407.4 1512,387.7 1523,347.2 1509,316.1 1495,283.1 1469,253.2 1467,216.9 1466,152.1 1504,90.5 1504,23.4 1505,-0.0188 1490,-21.74 1467,-30.8 1442,-40.62 1414,-37.76 1388,-33.1 1332,-23.1 1285,12.77 1250,55.49 1219,94.63 1164,112.5 1112,115.6 1089,116.7 1063,130.5 1055,152.2 1046,181.3 1057,208.7 1069,234 1091,280.8 1136,313.5 1177,346.9 1193,359.3 1210,370.4 1229,381.2 Z"
            data-pathid="M -777.7,1456 C -121,1624 674.7,1630 1420,1658 1748,1673 2115,1703 2405,1612 2797,1494 2935,1254 2759,1069 2582,872.4 2253,694.6 2228,478.8 2216,93.49 2696,-272.8 2696,-671.8 2708,-811 2519,-940.2 2228,-994 1912,-1052 1559,-1035 1230,-1008 523.2,-948.3 -70.45,-735 -512.5,-481 -904,-248.2 -1599,-142 -2255,-123.5 -2546,-117 -2874,-34.95 -2975,94.08 -3089,267.1 -2950,430 -2799,580.5 -2521,858.7 -1952,1053 -1434,1252 -1232,1325 -1018,1391 -777.7,1456 Z"
          />
          <path
            d="M 1255,378.6 C 1309,404.6 1372,400.5 1430,410.5 1457,414.8 1489,404 1502,380.3 1517,354.4 1510,324.1 1495,300.3 1479,273.7 1461,248.5 1461,215.9 1463,147.6 1504,86.49 1500,18.09 1498,-14.13 1463,-34.18 1428,-33.14 1378,-30.23 1324,-13.56 1295,27.12 1272,60.79 1243,93.34 1203,112.6 1169,128.8 1132,134.4 1101,154.2 1076,170.8 1076,207.4 1091,230.1 1101,245.6 1119,255.7 1132,270.5 1167,304 1197,343.3 1239,370.3 1244,373.5 1249,375.6 1255,378.6 Z"
            data-pathid="M -449.3,1440 C 232.7,1595 1028,1570 1761,1630 2102,1656 2506,1591 2670,1450 2860,1296 2771,1116 2582,974.7 2380,816.5 2152,666.7 2152,472.8 2178,66.73 2696,-296.6 2645,-703.3 2620,-894.9 2178,-1014 1736,-1008 1104,-990.6 422.1,-891.5 55.85,-649.6 -234.6,-449.4 -600.9,-255.9 -1106,-141.4 -1536,-45.06 -2003,-11.76 -2394,106 -2710,204.7 -2710,422.3 -2521,557.3 -2394,649.4 -2167,709.5 -2003,797.5 -1561,996.7 -1182,1230 -651.4,1391 -588.3,1410 -525.1,1422 -449.3,1440 Z"
          />
          <path
            d="M 1267,366.4 C 1321,392.2 1386,381.6 1444,395.7 1472,402 1501,381.5 1504,354.5 1508,326.4 1493,301.8 1478,277 1465,256 1456,231.1 1458,206.4 1463,142.5 1501,80.91 1496,15.8 1494,-15.3 1457,-33.15 1424,-32.43 1387,-29.82 1345,-20.25 1321,9.29 1298,38.8 1282,74.21 1250,98.11 1210,127.6 1161,140.4 1117,162.6 1090,175.4 1095,214.2 1116,229.7 1131,240.3 1145,252 1158,266 1191,301.7 1220,343.2 1267,366.4 Z"
            data-pathid="M -297.8,1368 C 384.2,1521 1205,1458 1938,1542 2291,1579 2658,1457 2696,1297 2746,1130 2557,983.6 2367,836.1 2203,711.3 2089,563.2 2115,416.4 2178,36.4 2658,-329.8 2594,-717 2569,-901.9 2102,-1008 1685,-1004 1218,-988.2 687.4,-931.3 384.2,-755.7 93.74,-580.2 -108.3,-369.6 -512.5,-227.5 -1018,-52.19 -1637,23.92 -2192,155.9 -2533,232 -2470,462.7 -2205,554.9 -2015,617.9 -1839,687.5 -1674,770.7 -1258,983 -891.4,1230 -297.8,1368 Z"
          />
          <path
            d="M 1273,351 C 1314,371.2 1362,369.7 1407,369.8 1427,370.4 1446,374.1 1465,375.8 1487,376 1500,352.2 1497,334.6 1493,316.9 1483,304.5 1474,290.8 1460,270.1 1447,246 1448,220.4 1452,150.6 1492,86.49 1490,16.84 1489,-11.44 1455,-29.67 1425,-28.44 1394,-27.98 1360,-21.9 1339,2.072 1322,20.33 1316,45.73 1300,64.88 1263,109 1211,139.7 1157,159.5 1143,165 1126,172 1123,186.7 1121,201.4 1129,214.1 1141,223.2 1169,241.7 1187,268.9 1207,293.8 1225,317 1246,336.5 1273,351 Z"
            data-pathid="M -222,1276 C 295.8,1396 902.1,1387 1470,1388 1723,1391 1963,1413 2203,1424 2481,1425 2645,1283 2607,1179 2557,1073 2430,999.7 2317,918.2 2140,795.1 1976,651.8 1988,499.6 2039,84.57 2544,-296.6 2519,-710.8 2506,-878.9 2077,-987.3 1698,-980 1306,-977.3 876.8,-941.1 611.6,-798.6 396.9,-690 321.1,-539 119,-425.1 -348.3,-162.8 -1005,19.76 -1687,137.5 -1864,170.2 -2079,211.8 -2117,299.2 -2142,386.6 -2041,462.1 -1889,516.2 -1536,626.2 -1308,788 -1056,936 -828.2,1074 -563,1190 -222,1276 Z"
          />
          <path
            d="M 1295,340 C 1335,359.4 1382,351.9 1426,351.2 1440,351.7 1459,354.5 1469,342.5 1481,329.3 1474,309.1 1465,296.6 1454,281.2 1443,267 1442,249.9 1441,216.6 1447,182.9 1456,150.9 1468,106.1 1491,62.3 1487,15.27 1485,-10.69 1455,-26.7 1428,-26.92 1397,-26.59 1363,-17.36 1346,6.839 1335,24.08 1331,45.14 1317,61.85 1294,89.26 1268,114.3 1239,137.7 1219,153.4 1194,162 1176,178.4 1161,194.2 1176,216 1188,229.1 1223,266.5 1246,316.3 1295,340 Z"
            data-pathid="M 55.85,1211 C 561,1326 1155,1281 1710,1277 1887,1280 2127,1297 2253,1226 2405,1147 2317,1027 2203,952.7 2064,861.1 1925,776.7 1912,675 1900,477 1976,276.6 2089,86.35 2241,-180 2531,-440.5 2481,-720.1 2456,-874.5 2077,-969.7 1736,-971 1344,-969 914.7,-914.1 700,-770.2 561,-667.7 510.5,-542.5 333.7,-443.1 43.22,-280.2 -285.2,-131.3 -651.4,7.864 -904,101.2 -1220,152.4 -1447,249.9 -1637,343.8 -1447,473.4 -1296,551.3 -853.5,773.7 -563,1070 55.85,1211 Z"
          />
          <path
            d="M 1316,322 C 1349,337.5 1392,337 1427,325.7 1440,320.3 1450,303.4 1441,291.6 1425,271.1 1429,245 1432,221.1 1441,153.6 1479,91.97 1485,22.72 1487,-1.013 1460,-19.56 1435,-24.24 1402,-28.47 1363,-13.3 1350,16.32 1343,36.99 1332,54.03 1318,72.92 1283,111.6 1235,142.5 1215,191.8 1206,212.7 1225,233.6 1240,248.3 1264,274.5 1282,306.8 1316,322 Z"
            data-pathid="M 321.1,1104 C 737.9,1196 1281,1193 1723,1126 1887,1094 2014,993.1 1900,923 1698,801.1 1748,645.9 1786,503.8 1900,102.4 2380,-264 2456,-675.8 2481,-816.9 2140,-927.2 1824,-955 1407,-980.2 914.7,-890 750.5,-713.9 662.1,-591 523.2,-489.6 346.3,-377.3 -95.71,-147.3 -701.9,36.4 -954.5,329.5 -1068,453.8 -828.2,578.1 -638.8,665.5 -335.7,821.3 -108.3,1013 321.1,1104 Z"
          />
          <path
            d="M 1324,301.4 C 1346,310.6 1377,312.3 1400,297 1414,287.4 1415,271 1411,256.5 1399,221.9 1422,183.4 1434,146.7 1448,101.5 1474,57.24 1473,10.72 1472,-13.48 1442,-25.38 1416,-19.85 1394,-14.87 1375,4.724 1369,25.13 1358,62.76 1318,89.1 1296,124.5 1277,153.2 1258,185.1 1262,216.9 1266,249.7 1288,274.2 1312,294.3 1316,297.7 1320,300.1 1324,301.4 Z"
            data-pathid="M 422.1,981.2 C 700,1036 1092,1046 1382,955.1 1559,898 1571,800.5 1521,714.2 1369,508.5 1660,279.6 1811,61.38 1988,-207.4 2317,-470.6 2304,-747.2 2291,-891.1 1912,-961.8 1584,-928.9 1306,-899.3 1066,-782.8 990.5,-661.5 851.5,-437.7 346.3,-281.1 68.48,-70.62 -171.5,100 -411.5,289.7 -360.9,478.8 -310.4,673.8 -32.56,819.5 270.6,939 321.1,959.2 371.6,973.5 422.1,981.2 Z"
          />
        </g>
        <g className="blob-6">
          <path
            d="M 1171,594.5 C 1147,625.3 1122,659.2 1123,702.9 1123,720.8 1146,733 1163,736 1216,745.3 1264,736.1 1317,756.3 1365,774.6 1408,813.4 1458,827.8 1493,838 1529,836.4 1557,823.5 1578,814 1601,801.2 1610,779.1 1619,754.7 1606,723.2 1588,697.2 1575,678.4 1561,660.2 1547,641.7 1529,616.5 1512,590.5 1492,566.7 1474,544.6 1456,518.1 1429,506.4 1384,486.9 1339,496.4 1301,508.5 1249,524.9 1202,553.4 1171,594.5 Z"
            data-pathid="M -2246,-123.4 C -2547,220.3 -2860,598.7 -2848,1086 -2848,1286 -2559,1422 -2346,1456 -1681,1560 -1079,1457 -414.8,1682 187.1,1887 726.3,2320 1353,2480 1792,2594 2244,2576 2595,2432 2858,2326 3147,2183 3259,1937 3372,1664 3209,1313 2984,1023 2821,812.9 2645,609.8 2469,403.4 2244,122.1 2030,-168 1780,-433.6 1554,-680.3 1328,-976 989.7,-1107 425.4,-1324 -138.9,-1218 -615.5,-1083 -1268,-900.1 -1857,-582.1 -2246,-123.4 Z"
          />
          <path
            d="M 1186,599 C 1167,624 1147,653 1153,689.1 1156,709.7 1184,719.5 1201,719.5 1253,719.5 1308,729.7 1360,759.8 1397,781.2 1431,810.8 1470,820.1 1525,833.3 1581,818.2 1602,776.6 1614,753.5 1600,722.3 1582,696.9 1556,660 1528,623.7 1504,585.6 1483,552.5 1450,523.3 1413,513.7 1367,501.8 1325,511.5 1287,525.3 1251,538.3 1220,559.7 1196,587.3 1193,591.4 1189,595.2 1186,599 Z"
            data-pathid="M -2058,-73.16 C -2296,205.8 -2547,529.5 -2471,932.4 -2434,1162 -2083,1272 -1869,1272 -1217,1272 -527.7,1385 124.4,1721 588.4,1960 1015,2291 1504,2394 2194,2542 2896,2373 3159,1909 3310,1651 3134,1303 2908,1019 2582,607.6 2231,202.5 1930,-222.7 1667,-592.1 1253,-918 789,-1025 212.2,-1158 -314.5,-1050 -791,-895.7 -1242,-750.6 -1631,-511.7 -1932,-203.7 -1970,-158 -2020,-115.6 -2058,-73.16 Z"
          />
          <path
            d="M 1214,595.8 C 1197,618.1 1171,648.2 1184,679.2 1194,703.2 1227,699.1 1248,702.5 1305,712 1362,745 1413,781.8 1473,824.9 1550,827.7 1589,787.6 1606,770.1 1602,736.4 1586,711 1561,672.4 1533,636.5 1507,598.6 1488,570.7 1462,544.8 1430,531.3 1399,518.1 1367,520.7 1338,526.7 1289,536.8 1243,558.1 1214,595.8 Z"
            data-pathid="M -1706,-108.9 C -1920,140 -2246,475.9 -2083,821.9 -1957,1090 -1543,1044 -1280,1082 -565.3,1188 149.5,1556 789,1967 1541,2448 2507,2479 2996,2032 3209,1836 3159,1460 2958,1177 2645,746 2294,345.3 1968,-77.62 1730,-389 1403,-678 1002,-828.7 613.5,-976 212.2,-947 -151.5,-880 -765.9,-767.3 -1343,-529.6 -1706,-108.9 Z"
          />
          <path
            d="M 1234,600.6 C 1223,615.5 1209,636.1 1220,658 1229,675.9 1252,675.9 1269,682.7 1326,705.8 1377,746.4 1430,782.6 1463,805.1 1504,817.1 1536,809.7 1562,803.7 1589,792.2 1595,766.7 1601,744 1583,718.9 1568,697.2 1543,660.9 1519,623.5 1492,588.5 1466,555.1 1422,534.6 1386,536.4 1344,538.5 1305,547.3 1274,565.8 1258,575.3 1245,586.2 1234,600.6 Z"
            data-pathid="M -1456,-55.3 C -1594,111 -1769,340.9 -1631,585.3 -1518,785 -1230,785 -1017,860.9 -302,1119 337.6,1572 1002,1976 1416,2227 1930,2361 2331,2278 2657,2211 2996,2083 3071,1798 3147,1545 2921,1265 2733,1023 2419,617.6 2118,200.3 1780,-190.3 1454,-563.1 901.9,-791.9 450.4,-771.8 -76.24,-748.3 -565.3,-650.1 -954,-443.7 -1155,-337.7 -1318,-216 -1456,-55.3 Z"
          />
          <path
            d="M 1256,604.1 C 1246,616.3 1234,636 1247,652.4 1271,682.7 1309,690.7 1341,712.2 1386,743.1 1429,783.5 1480,802.2 1525,818.7 1574,803.3 1586,765 1593,742 1573,714.1 1555,692.1 1527,658.3 1508,618.2 1477,586.6 1445,554.4 1398,545.4 1363,551.8 1320,559.5 1280,573 1256,604.1 Z"
            data-pathid="M -1180,-16.24 C -1305,119.9 -1456,339.8 -1293,522.8 -991.7,860.9 -515.1,950.2 -113.9,1190 450.4,1535 989.7,1986 1629,2195 2194,2379 2808,2207 2958,1779 3046,1523 2795,1211 2570,965.8 2219,588.6 1980,141.1 1592,-211.5 1190,-570.9 600.9,-671.3 162,-599.9 -377.2,-514 -878.8,-363.3 -1180,-16.24 Z"
          />
          <path
            d="M 1277,608.4 C 1269,619 1270,636.7 1284,649.8 1307,671.5 1335,682.8 1358,703.4 1395,736.5 1434,771.9 1479,791.4 1518,808.5 1564,802 1578,768.3 1585,749.9 1569,726.3 1554,707.9 1531,679.6 1518,646.1 1497,616.4 1473,583.6 1432,563.1 1397,562.5 1367,562 1340,567.7 1315,577.6 1299,583.9 1287,594.9 1277,608.4 Z"
            data-pathid="M -916.4,31.74 C -1017,150 -1004,347.6 -828.6,493.8 -540.2,735.9 -189.1,862 99.32,1092 563.3,1461 1052,1856 1617,2074 2106,2265 2683,2192 2858,1816 2946,1611 2745,1348 2557,1142 2269,826.3 2106,452.5 1842,121 1541,-245 1027,-473.8 588.4,-480.5 212.2,-486.1 -126.4,-422.5 -439.9,-312 -640.5,-241.7 -791,-118.9 -916.4,31.74 Z"
          />
          <path
            d="M 1308,617.9 C 1295,637.9 1303,640.3 1333,667 1363,693.7 1425,760.9 1469,785.5 1513,810.1 1553,797.3 1568,778.6 1583,759.9 1577,747.5 1563,731.1 1549,714.7 1542,699.6 1527,676.6 1512,653.6 1484,616.5 1459,599.7 1434,582.9 1422,583.6 1394,584.4 1366,585.2 1321,597.9 1308,617.9 Z"
            data-pathid="M -527.7,137.8 C -690.7,361 -590.4,387.7 -214.2,685.7 162,983.7 939.5,1734 1491,2008 2043,2283 2545,2140 2733,1931 2921,1722 2846,1584 2670,1401 2494,1218 2407,1050 2219,792.9 2030,536.2 1679,122.1 1366,-65.35 1052,-252.8 901.9,-245 550.8,-236.1 199.6,-227.2 -364.7,-85.44 -527.7,137.8 Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default BlobBackground;
