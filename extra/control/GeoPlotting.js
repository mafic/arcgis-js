//////////////////////////////////////////////
//         基于开源算法的动态标绘接口       //
//基于ArcGIS API for JavaScript 3.18        //
// Copyright © 2016 Esri.                   //
//////////////////////////////////////////////
eval((function(x){var d="";var p=0;while(p<x.length){if(x.charAt(p)!="`")d+=x.charAt(p++);else{var l=x.charCodeAt(p+3)-28;if(l>4)d+=d.substr(d.length-x.charCodeAt(p+1)*96-x.charCodeAt(p+2)+3104-l,l);else d+="`";p+=4}}return d})("define(\"dojo/_base/declare ` .!has` #\"` 6\"lang` $(connect` '(even` $)Color esri/layers/GraphicsLaye` 3#g` -\"` &#eometry/jsonUtils` )+webMercator` +0Point` #-lyline` $/gon` '+Multip` a!..` -&Text/GeoTex` +*`!,!/Geo`!4\"` &1` o!` ..Line/GeoArc` #1BspLine` &2ezierCurve2` G2` 7&3` B<N` ,1Cardinal` >!`\"*+`#5!/GeoSector` &4Lu`!p+` 1'GatheringPlac` -5RoundedRec`#L,` :%Close`!H9Ellips` &5` $#Ex`!,5ectangl` I5Circ` /+Flag` T$Flag` (1Tri` s!` (5`\"2!` --Arrow`$U0` 4!` 07`$f)` -<ParallelSearch` -8`(y#` Q<`%f\"` V5`#E'Diagonal` Z4` ?(oubl`!\"5` <)veTail` OI` M\"Straight` 0?St` \"EAttack` &?Clamp`!DG` m(`,x!symbols/SimpleMarkerS` /!` ,0Line` $6Fill` *0Text` $0Fo`.h$toolbars/_` ##\".split(\" \"), function (q, ia, m, g, ja, k, r, l, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, aa, ba, ca, da, ea, fa, ga, n, h, p, ka, la, ha) {return q([ha], {_`2b!Map:{'draw-complete':true, ` 0\"end':[\"`$g$\"]}, TEXT:\"text\", POINT:\"`1G!\", MULTI` -#m`1\\%\", ARC:\"arc\", BSPLINE:\"bspline\", BEZIERCURVE2:\"b`+'!c`0R!` /*3` 0)3` /*N` 0)n\", CARDINA` 9!:\"c`+R\"` 9!\", CIRCLE:\"c`-R!\", SECTOR:\"s`*]!\", ROUNDEDRECT:\"r`/^\"rect\", RECTANGLE:\"r`.P$`\"i!LYGONEX:\"p`'m\"ex\", LUNE:\"lu`\"G!GATHERINGPLACE:\"g`0{$place\", ELLIPSE:\"e`0,\"\", CLOSE`!$lose`!|%URVEFLAG:\"` .!flag`!X#` 0\"rect` .#TRI`!n!` 3\"t`/O#` 6#`#='ARROW`#?)arrow`#F&L` ;(`#O#l` <)PARALLELSEARCH:\"p`.#s`.2!`#\"#LIN` ]$p`.v#` X$`$%\"` V$`$+\"` S%STRAIGHT` U#s`,f#` T$DIAGONAL` 8#d`.##` 6%OUBL`!0$d`.s!` 1&VETAIL` R,ovetail` X.` I\"`!A+` G$`!H,ATTACK` >#a`-9!`#O%LAMP`#H$lamp` s,` O)` y$` V*_options:{drawTime:75, tolerance:8}, controlPoints:[], _tGraphics:null, _`*D$Type` -#activated:false, _g` N#LayerId:\"GeoPlotting_Draw_temp_layer\", _mapDbZoom` k#constructor:`.*&a, b) {this.map = a;m.mixin(this, b);` 9!_ini`!q%`!@!(` 2$`!\"% = ` b$.is`3}\"ClickZoom` G\"m`0z(= new n(n.STYLE_`*{\", 10,` 5!h(h` 3#SOLID` /\"k([255, 0, 0]), 2)` /%0` 0\", 0.25])`!Y#l`1o&`!+\"` PC` X\"f`2/&` X\"p(p` L.`!)]}, `#P.`$>'`$=$`%:*`#e(get`$1\"` 5/Id`$D$` Q*|| ` ;0`\"C#r({id:` Z1}),`!0&add`!!5`\"5\"`'G$`&C3`'u)`&_!` 2!de` P$`&C$`(.% = true`\".#`)B# = `'0(` /%, b || {}`\"]$onMouseMoveHandler_connect = g.` %#` _\"map, \"` G'\"`\"T\"`\"Y#` Y/` w+Down` XJDown` p2` a'` |&`(}!` YE` I!` m-` X(` p&Dbl` OJ` I$` o-` [+` |#map.navigationManager.setImmediat`+8\"(true`+[.&&`&Y&disable`+d+`%o$map.snapping` # &&`'t#` */._startSele`')!`'E!Query(`'l(` D.etUpS` /#(`+x$onA`'?$`'\\.`(:!`'_&`*>0clea`.D%`'v(`06!;g.dis`$!)`'E7)` 47`&v/` 83`%A0` 43`%l3`$P:en`#~kop`$;MkillOff`$]-`&lD`$8!`%9%D`,_(}, `$o\"`${/controlPoints = []`###`01%`#!%`.;*.remov`&;$` E%,`-c!`#g$` [&= null`!F!`%\\.`.{() {switch`0A%`'2( {case`!J\"POINT:` &&MULTI` /\"return;default:;}var b`$R:b`21(`$b.` *#`#$!);b =`/_\"a.map` 0!;0 <` [\"`#G).length`#=%`(g&&&`(l\" !=`!3#_canDrawTem` n\"(a)`#u&setTG`\"f#`\"v\"` {*concat(b.offset(0, 0)`2j\"`) /`#e+`(Y#ld` h! = a.screen`\"6\"if (!`$e+) {`\"gla`#D/` S*patialReference;`%?I`&c.`'E0add(new l(new v(a.x, a.y, b`)x&rkerSymbol)`'f)`\"P3`/'9`!I#`([,);break;`'M1b = new y(a`\"d-);b.ad`$d\"(a`)80`\"9:b`!D~`\"*8ARC`*+'BSPLINE` &(EZIERCURVE2` =(` -&3` 82N` ,'CARDINA` 3!` 82ARROW` @.L` (1PARALLELSEARCH` -(OLYLIN` @-SECTOR` H#`&DPw({paths:[[[`&z$], ` \"&]], `%J,:b}`';$line`#y~`$l+CIRCL`#d(`\"a\"` &'ROUNDEDREC`/O(RECTANG` N)POLYGONEX` )'LU`%])GATHERINGPLAC` -(ELLIPS` &(CLOSE`%>,STRAIGHT`$M,DIAGONAL` '-OUBL`$z-DOVETAIL` <6` :\"` v4ATTACK`&^-LAMP` S4` <3URVEFLAG` )'TRI`#T!` (+RECT` .!`+`$x(b), `+S!Ring([a`0z)]`&/$`+4Ofill`&\\*`+w%`& gdefault:;}}}, `3@)`2_(, b, f`24#c, d =`4@\", e`2q!`4i\"`0pDTEXT:b && 0 <= e`2n!d =`)&(activate`!\"%;new z(a`\"]&, m.hitch`!+!, `4H0clear(`/f$drawEnd(a);}));return`)?'`0^$`!B4c`%1#A(a`1+9` @$B` 40ARC` }\"3` g8C` G0`/n%` >#D` 01`/~(` g>E` E;3` ^\"4` H8F` E;N`!i%G` 60`1)*` C#H` 51`-e\"`!M!2`!68Q` J0`.1#`\"R>I` J0`.Y(` >L` N1`/)%` ?>P` M0`/T'` @#O` 30`/m!`\"%>J` H0`00+`!G>K` R0`0d$` =>N`$s1`1.'` A#M` 40`.|)` j>S` w1`/x%` ?>T`$^4` 9CR`(*;`1V#` G#U`(27L` =/V`%^1ARALLELSEARCH` C%W`&'4LIN` h+X`(R6` n#`\"7>Y` O1TRAIGHT`!!*da` 80DIAGONAL` F\"`+q>Z` P1OUBL`\"7#` A>a`!32OVETAIL`!C*` L$b` 79`\";2c` ?1ATTACK` <*e` 51CLAMP`!mDf`!D9`!!0g` G'default:` P!de`4=$(), console.error(\"\\u8BF7\\u8865\\u5145\\u6807\\u7ED8\\u7C7B\\u578B\\uFF01\");}`4?\"tGraphics.setGeometry(c);if (d || f) {` G!`!8$d = false,`\")\"_clear()` '$drawEnd(c);}}, _onClickHandler:function (a) {var b;` T!map.snappingManager`#R!b =` t\"` ./._` )$Point)` d\"control` .!s.push((b || a.map` D\".offset(0, 0));a` }$` N*length;switch (`\";\"g`# #Type) {`-V'EXT:`*5(IN` $(MULTI` /\"` c\"setT`#k%`!,.,`&'#`%@*1 < a &&`#g#` =C`$##Dbl`#r7`$x+` ZF`%G$`!%\", _canDrawTem`#i\"` z+if (!` v\"old`$+\" {return` g\";}`%U!`$.$` >%.x - a.screen` +#, f` 6.y` 7-y, c` >&ptions.tolerance`'l!(0 > b ? -1 * b : b) < c`&c!0 > f` 4$f : f` 7!`!h-b`*$#Dat` p\"b -`#A$tartTime <`!9+drawTime` ]-` I,=`(G$`\"B% =`\";*;` Z#true`$(!`)J#`#q/`)9%`(v)patialReference, f`!,\"o`$o!End`,>!`)V\".isWebMercator() ? (f = u.w` -&ToGeog`+c\"(a`%a#) : 4326 === b.wki`&M!` Y!t.fromJson(b.to` $!)))`*8#`!B\"Complete({`)H$:a, g`! %`')$:f}`'y\"onA`'T#`\"_') {` 6!D`.6%` )0`!$'` (3`#R*) {}});});"))