import React from "react";

export default class QuadArmorDiagramSVG extends React.Component<
  IQuadArmorDiagramSVGProps,
  IQuadArmorDiagramSVGState
> {
  bgColor = "rgb(255,255,255)";
  strokeColor = "rgb(0,0,0)";
  theWidth = 744;
  theHeight = 627;
  xLoc = 0;
  yLoc = 0;
  baseWidth = 744.09448819;
  baseHeight = 1052.3622047;
  constructor(props: IQuadArmorDiagramSVGProps) {
    super(props);
    this.state = {};
    if (this.props.bgColor) {
      this.bgColor = this.props.bgColor;
    }
    if (this.props.strokeColor) {
      this.strokeColor = this.props.strokeColor;
    }

    if (this.props.width) {
      this.theWidth = this.props.width;
      this.theHeight = Math.round(
        (this.props.width / this.baseWidth) * this.baseHeight,
      );
    }

    if (this.props.xLoc) {
      this.xLoc = this.props.xLoc;
    }

    if (this.props.yLoc) {
      this.yLoc = this.props.yLoc;
    }

    // if( typeof(standAlone) === "undefined" )
    //     standAlone = true;

    // if( !baseFillColor )
    //     baseFillColor = colorTan;

    // if( !lineColor )
    //     lineColor = colorGold;
  }

  render = (): JSX.Element => {
    // var svg = "";

    // if( standAlone ) {
    //     var svg = "<!DOCTYPE HTML><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" height=\"" + theHeight  + " px\" width=\"" + theWidth  + "px\" viewBox=\"0 0 790 100\" ><g>\n";

    return (
      <svg
        y={this.yLoc}
        x={this.xLoc}
        width={this.theWidth}
        height={this.theHeight}
        viewBox={"0 0 " + this.baseWidth + " " + this.baseHeight}
        id="quadArmorDiagram"
        version="1.1"
      >
        <g>
          <g id="ArmorLayer1">
            <path
              id="path4158"
              d="m 9.1651686,1042.2814 c 0,-5.5971 0.79702,-9.1159 2.3582504,-10.4117 1.29704,-1.0764 2.35826,-2.578 2.35826,-3.3368 0,-0.7588 -1.06122,-1.3797 -2.35826,-1.3797 -3.7468404,0 -2.8852904,-9.3302 1.71377,-18.5593 4.81116,-9.65474 16.34058,-20.23813 28.72166,-26.36489 4.87786,-2.41382 9.10302,-4.55238 9.38925,-4.75236 0.28623,-0.19998 -0.25469,-1.81192 -1.20205,-3.58208 -1.26823,-2.3697 -1.09208,-10.17922 0.66793,-29.61285 1.31473,-14.5169 3.34233,-52.33435 4.50578,-84.0388 1.98441,-54.07559 2.32451,-57.99891 5.49337,-63.36973 4.36765,-7.40261 4.26099,-11.11703 -0.481,-16.75257 -2.12246,-2.52239 -5.4009,-8.81494 -7.28543,-13.98345 -1.88453,-5.16849 -4.1431,-9.39727 -5.01905,-9.39727 -0.87595,0 -4.54266,-2.41732 -8.14825,-5.37182 -10.74416,-8.80405 -13.11991,-22.13615 -6.33171,-35.532 3.85407,-7.60564 12.50954,-14.12214 18.75758,-14.12214 1.31391,0 3.88391,-2.9304 5.7111,-6.51199 1.82719,-3.5816 6.55025,-9.96307 10.49569,-14.18106 l 7.17353,-7.66909 -2.77234,-8.22236 c -2.71045,-8.03881 -2.66255,-9.48583 2.14581,-64.82049 5.33184,-61.35879 12.89416,-121.11541 16.9117,-133.63448 8.112711,-25.28002 19.234101,-35.37383 38.974981,-35.37383 l 10.28174,0 0,-7.87272 c 0,-7.71813 -1.01886,-9.40056 -51.881631,-85.67141 -42.68161,-64.00288 -51.88162,-78.74588 -51.88162,-83.14022 0,-4.77281 1.71582,-6.90284 16.11475,-20.00505 8.86311,-8.06492 16.28639,-14.74064 16.49619,-14.83492 0.20979,-0.0943 -1.54909,-4.53941 -3.90863,-9.87807 -3.81681,-8.63584 -4.78677,-9.70665 -8.79256,-9.70665 -5.03707,0 -15.19324,-8.8801 -15.19324,-13.2843 0,-7.00633 6.84752,-14.07867 14.84314,-15.33048 2.21861,-0.34735 3.79173,-2.97012 5.76168,-9.60609 l 2.70983,-9.12829 -13.2295,-15.60549 c -12.11414,-14.28983 -13.22949,-16.1746 -13.22949,-22.35598 0,-6.73413 0.0492,-6.79134 20.30726,-23.606741 18.25452,-15.152353 20.93478,-16.856254 26.51514,-16.856254 5.9572,0 6.76612,0.666614 20.031881,16.507788 12.48698,14.911197 14.33213,16.507787 19.0778,16.507787 4.60983,0 5.25381,-0.50103 5.25381,-4.08764 0,-5.437733 9.30754,-14.778402 14.72599,-14.778402 6.11119,0 15.14525,9.737759 15.14525,16.324982 0,4.83516 0.73989,5.59052 10.15917,10.3715 l 10.15918,5.15653 15.78563,-14.35434 15.78562,-14.354332 156.90671,0 156.90669,0 16.11885,14.338662 16.11886,14.33866 10.1283,-5.14086 c 9.53311,-4.83874 10.1283,-5.46258 10.1283,-10.61563 0,-4.24108 1.2652,-6.668033 5.61453,-10.769982 3.1554,-2.975923 7.26407,-5.29519 9.38062,-5.29519 4.58486,0 14.4325,9.409469 15.1512,14.477052 0.38721,2.73022 1.6787,3.71703 5.33201,4.07404 4.39972,0.42997 6.02403,-0.97837 18.58605,-16.114744 13.23564,-15.948038 14.00402,-16.585881 19.98013,-16.585881 5.59084,0 8.25982,1.697588 26.57178,16.900831 20.07676,16.668424 20.35727,16.990734 20.39874,23.438704 0.038,5.91825 -1.20667,8.03386 -13.13371,22.32244 l -13.17578,15.78456 2.42931,8.72793 c 1.82832,6.56877 3.14887,8.72793 5.338,8.72793 4.09733,0 13.37328,9.3505 14.57031,14.68744 0.84085,3.74892 0.0876,5.33094 -4.67864,9.82606 -3.62034,3.41442 -7.24605,5.35773 -9.99612,5.35773 -3.76158,0 -4.80627,1.1599 -8.14196,9.03998 -2.10466,4.97199 -3.82668,9.41139 -3.82668,9.86534 0,0.45395 7.25164,7.41948 16.11475,15.47896 14.42633,13.11828 16.11475,15.21564 16.11475,20.01779 0,4.42405 -9.09268,18.99901 -51.88163,83.16284 -50.86276,76.27085 -51.88162,77.95328 -51.88162,85.67141 l 0,7.87272 10.28175,0 c 19.74234,0 30.88377,10.11379 38.96814,35.37383 2.66137,8.31557 9.3042,53.25753 11.96763,80.96678 9.42539,98.05804 10.07728,108.78576 7.13625,117.43812 l -2.81189,8.27243 7.17353,7.66909 c 3.94544,4.21799 8.66851,10.59946 10.4957,14.18106 1.82719,3.58159 4.39719,6.51199 5.7111,6.51199 6.24804,0 14.90351,6.5165 18.75758,14.12214 6.88795,13.59275 3.88915,28.92083 -7.15665,36.58035 -3.42918,2.37791 -6.83812,4.32347 -7.57542,4.32347 -0.73729,0 -2.88242,4.22878 -4.76695,9.39727 -1.88453,5.16851 -5.16296,11.46106 -7.28542,13.98345 -4.75553,5.65164 -4.84912,9.34916 -0.42639,16.84516 3.24111,5.49326 3.54434,8.98503 5.43474,62.58364 1.10117,31.22118 3.12682,68.95468 4.50146,83.85223 1.77757,19.26425 2.02417,27.97434 0.85395,30.16093 -2.16278,4.0412 -2.07726,4.85334 0.51113,4.85334 3.49929,0 25.03016,14.73189 29.77875,20.37534 2.40621,2.85964 5.75607,7.90654 7.44412,11.21544 3.74497,7.3407 4.15154,17.1465 0.71094,17.1465 -3.02123,0 -3.02123,2.2092 0,4.7165 1.56122,1.2958 2.35825,4.8146 2.35825,10.4117 l 0,8.4544 -97.47455,0 -97.47456,0 0,-8.4544 c 0,-5.5971 0.79703,-9.1159 2.35825,-10.4117 3.09342,-2.5673 3.00026,-4.7165 -0.20446,-4.7165 -3.67059,0 -2.00376,-13.0258 2.43511,-19.0296 l 3.36608,-4.5529 -58.6104,-0.01 c -32.23574,0 -65.50832,-0.4652 -73.93908,-1.0235 l -15.32866,-1.015 0,-6.62569 c 0,-4.3224 1.13271,-8.06566 3.25845,-10.76808 2.70111,-3.4339 2.83556,-4.14244 0.78608,-4.14244 -3.20683,0 -3.33534,-9.0408 -0.234,-16.46335 3.21586,-7.69662 14.1204,-18.92673 24.74705,-25.48587 5.04597,-3.11455 9.17451,-6.18311 9.17451,-6.81902 0,-0.63591 -1.06122,-2.03694 -2.35826,-3.11338 -1.72458,-1.43128 -2.35025,-5.17947 -2.32848,-13.94899 0.0163,-6.59551 -1.17012,-39.41862 -2.63665,-72.94026 -2.49579,-57.04837 -2.4977,-61.30224 -0.0297,-66.47754 1.6877,-3.53924 2.63659,-9.4797 2.63659,-16.50639 l 0,-10.97729 -5.50259,-2.624 -5.5026,-2.624 0,-33.53591 0,-33.53592 5.5026,-2.624 c 5.50127,-2.62339 5.50259,-2.6266 5.50259,-13.44137 0,-5.94955 -0.88434,-12.36268 -1.96521,-14.25139 -1.21544,-2.12388 -2.26512,-12.43131 -2.7513,-27.01658 l -0.78608,-23.58256 -53.06075,-0.41395 -53.06075,-0.41395 -0.0557,23.21042 c -0.0412,17.15442 -0.64199,24.23593 -2.3026,27.14085 -1.345,2.35284 -2.26919,8.38853 -2.30253,15.03747 l -0.0557,11.10706 5.5026,2.624 5.50259,2.624 0,33.46959 0,33.46957 -5.50259,2.96335 c -5.46979,2.94567 -5.5026,3.02794 -5.5026,13.79903 0,6.95181 0.92081,12.61636 2.56898,15.80355 2.23425,4.32058 2.42268,8.73868 1.44616,33.90916 -0.61755,15.91772 -1.3436,30.09588 -1.61344,31.50703 -0.26985,1.41116 -1.01305,21.4808 -1.65154,44.59923 -0.89923,32.5596 -1.64612,42.4362 -3.31379,43.82022 -3.36682,2.79422 -2.61458,4.24662 3.92817,7.58448 9.0449,4.61437 23.11319,18.15294 26.81996,25.81009 3.94076,8.14052 4.41499,18.31662 0.85358,18.31662 -1.94982,0 -1.78144,0.84383 0.88921,4.45608 2.43826,3.29792 3.16558,6.26039 2.79837,11.39823 l -0.49623,6.9422 -73.59491,0.4086 -73.5949,0.4087 3.44959,4.8445 c 4.51086,6.3349 6.13076,18.7068 2.44935,18.7068 -3.20471,0 -3.29788,2.1492 -0.20446,4.7165 1.56123,1.2958 2.35825,4.8146 2.35825,10.4117 l 0,8.4544 -97.47456,0 -97.4745614,0 0,-8.4544 z m 190.2326114,-1.521 c 0,-2.0278 -1.41495,-4.9673 -3.14434,-6.5324 -3.8424,-3.4773 -4.42393,-13.3634 -0.78608,-13.3634 8.6345,0 -5.73779,-18.0598 -21.91882,-27.54253 l -7.37502,-4.32204 4.6163,-4.89902 c 4.46397,-4.73737 4.67651,-5.67711 6.44182,-28.48156 1.00405,-12.97041 5.42471,-49.38898 9.82369,-80.93018 7.51974,-53.91734 7.8623,-57.77298 5.72717,-64.45898 -1.73077,-5.41977 -1.96642,-10.25457 -0.99067,-20.32532 0.70416,-7.26765 1.46548,-13.30219 1.69183,-13.41006 0.22634,-0.10785 2.94102,-1.34287 6.03262,-2.74444 l 5.62109,-2.54832 1.9607,-24.91805 c 1.07838,-13.70492 2.35057,-27.86099 2.82706,-31.45796 0.81673,-6.16527 0.54095,-6.75071 -4.814,-10.21911 l -5.68036,-3.67918 0.96588,-12.57736 c 0.66675,-8.68218 2.10991,-14.7684 4.65989,-19.65213 3.31048,-6.34018 4.18185,-12.70658 8.39228,-61.31464 3.92923,-45.36169 7.95935,-124.11799 7.95935,-155.54088 l 0,-7.96484 -36.70233,0 c -34.7057,0 -36.85715,-0.17105 -39.54793,-3.14434 -2.30335,-2.54517 -4.82135,-3.13942 -13.21408,-3.11847 -26.4283,0.0659 -34.178081,14.42356 -42.416291,78.58265 -2.60918,20.3203 -6.69114,59.77318 -9.07101,87.67305 -3.61095,42.33202 -4.01399,51.89757 -2.43537,57.79982 3.38665,12.66233 2.60493,16.93341 -4.08292,22.3079 -3.28603,2.64073 -8.27985,9.12642 -11.09739,14.41267 -3.39391,6.36762 -6.08806,9.61134 -7.98294,9.61134 -7.05711,0 -13.50786,4.47998 -17.10152,11.87682 -3.33708,6.8687 -3.45975,8.03225 -1.60843,15.25571 2.14384,8.36486 8.95925,15.31607 15.01684,15.31607 2.46712,0 3.64062,1.6826 5.20829,7.46781 2.63344,9.71821 6.66234,17.7304 10.79509,21.46797 4.38748,3.96794 4.23525,10.85852 -0.41706,18.87728 -3.60408,6.21204 -3.78931,8.18686 -5.5428,59.09452 -0.99776,28.96724 -2.962,66.30639 -4.36496,82.9759 l -2.55086,30.30819 3.37715,3.59479 c 1.85743,1.97715 3.37714,4.01313 3.37714,4.52441 0,0.5113 -4.68535,3.12216 -10.41188,5.80192 -5.72654,2.67978 -13.81043,7.36708 -17.96422,10.41624 -11.88133,8.72175 -21.73332,25.88435 -14.85859,25.88435 3.63786,0 3.05632,9.8861 -0.78608,13.3634 -1.72939,1.5651 -3.14434,4.5046 -3.14434,6.5324 l 0,3.6867 92.758051,0 92.75805,0 0,-3.6867 z m 525.10489,0 c 0,-2.0278 -1.41495,-4.9673 -3.14434,-6.5324 -3.8424,-3.4773 -4.42393,-13.3634 -0.78608,-13.3634 7.21509,0 -3.30372,-17.5648 -15.93594,-26.61059 -4.68356,-3.35382 -13.04459,-8.07093 -18.58008,-10.48245 l -10.06455,-4.38458 3.81729,-4.53659 c 4.49398,-5.34079 4.40078,-3.209 1.52815,-34.95265 -1.25199,-13.8351 -3.1194,-49.91641 -4.14982,-80.18068 -1.81175,-53.21322 -1.99551,-55.23769 -5.57811,-61.45278 -4.95914,-8.6031 -4.72162,-14.0102 0.8965,-20.40889 2.53065,-2.88223 6.20728,-10.22727 8.17032,-16.32229 2.87259,-8.91911 4.19913,-11.09292 6.79708,-11.13842 8.41872,-0.14747 17.81894,-15.4746 15.11343,-24.6426 -2.61837,-8.87275 -5.24127,-12.6559 -10.51958,-15.17294 -2.97166,-1.41709 -6.73309,-2.57652 -8.35872,-2.57652 -2.00241,0 -4.79214,-3.2839 -8.64975,-10.18193 -3.13173,-5.60005 -8.14496,-12.05131 -11.14051,-14.33613 -6.09984,-4.65259 -6.88827,-9.35022 -3.62012,-21.56947 3.89441,-14.56072 -12.91283,-174.24258 -20.75293,-197.1691 -6.83475,-19.9866 -15.49836,-27.08689 -33.10438,-27.1308 -8.39273,-0.0209 -10.91072,0.5733 -13.21407,3.11847 -2.69079,2.97329 -4.84224,3.14434 -39.54793,3.14434 l -36.70234,0 0.002,10.61215 c 0.005,32.92807 3.82807,107.16786 7.93188,154.04029 4.10481,46.88412 5.142,54.54394 8.05379,59.47907 4.20415,7.12551 7.02095,32.23487 3.81726,34.02774 -1.10423,0.61796 -3.57042,2.38985 -5.48038,3.93751 l -3.47268,2.81394 2.71588,31.28704 2.71588,31.28706 5.89763,2.51461 c 5.58251,2.38026 5.94639,2.97665 6.81006,11.16156 1.59582,15.1236 1.47347,19.51148 -0.7103,25.47417 -1.92841,5.2654 -1.36075,11.42837 5.93731,64.45898 4.43827,32.25033 8.8989,68.89535 9.91248,81.43341 1.78207,22.04408 1.99841,22.96094 6.55481,27.77937 l 4.71191,4.98288 -6.79632,3.46724 c -8.08358,4.12393 -24.07792,19.68618 -25.37769,24.69218 -0.71469,2.7525 -0.25351,3.5374 2.07868,3.5374 4.24652,0 4.1421,9.4817 -0.14716,13.3634 -1.72939,1.5651 -3.14434,4.5046 -3.14434,6.5324 l 0,3.6867 92.75805,0 92.75804,0 0,-3.6867 z m -386.7539,-46.76785 c 0,-1.80917 -1.41495,-5.08823 -3.14434,-7.28678 -4.1951,-5.3332 -4.20577,-12.61703 -0.0195,-13.29006 3.06057,-0.49206 3.04907,-0.66536 -0.55941,-8.42314 -4.55321,-9.78887 -15.53933,-19.69236 -28.93951,-26.08768 l -10.08396,-4.81264 4.47253,-4.66172 4.47251,-4.66174 3.27667,-71.83013 c 3.18403,-69.79921 3.19515,-71.99504 0.39304,-77.66312 -2.07538,-4.19811 -2.88361,-9.38294 -2.88361,-18.49844 l 0,-12.66544 5.50259,-2.624 5.5026,-2.624 0,-30.39157 0,-30.39158 -5.5026,-2.624 -5.50259,-2.624 0,-12.1145 c 0,-8.71171 0.8735,-14.03951 3.10981,-18.96791 2.58959,-5.70693 3.11559,-10.33818 3.14434,-27.68466 l 0.0345,-20.83125 -9.82607,-0.0494 c -8.64693,-0.0435 -10.1704,-0.52226 -12.69554,-3.98979 -2.29441,-3.15073 -4.57668,-18.02778 -11.38841,-74.23565 -4.68541,-38.66239 -8.52336,-70.47213 -8.52875,-70.6883 -0.005,-0.21617 -9.11589,-0.39304 -20.24552,-0.39304 l -20.23569,0 -0.95262,15.32866 c -0.52394,8.43076 -1.40324,32.3081 -1.95399,53.06075 -0.55076,20.75264 -3.28898,63.55498 -6.08494,95.1163 -4.40472,49.7211 -5.52088,58.11903 -8.35827,62.88681 -2.00976,3.37709 -3.68915,9.80498 -4.34767,16.6408 l -1.07299,11.13821 5.73687,3.38482 c 5.59268,3.29977 5.71451,3.57299 4.84771,10.87219 -0.94537,7.96079 -5.51302,59.13505 -5.51302,61.76574 0,0.8575 -2.91908,2.72707 -6.48684,4.1546 l -6.48684,2.59552 1.02521,15.86475 c 0.56388,8.72561 1.23968,23.647 1.50179,33.15863 0.26211,9.51163 1.06322,34.5722 1.78026,55.69017 l 1.30371,38.39628 5.25073,5.81194 5.25074,5.81194 -10.33901,6.04647 c -5.68644,3.32556 -12.75995,8.72619 -15.7189,12.0014 -5.07096,5.61293 -5.37992,6.60212 -5.37992,17.22482 0,8.35124 -0.68451,12.02629 -2.6431,14.19051 -2.48384,2.74461 -2.46015,3.05227 0.39304,5.10557 1.66988,1.20174 4.4511,3.28118 6.18049,4.621 2.73578,2.11951 12.79652,2.44254 77.42939,2.48604 l 74.28504,0.05 0,-3.28941 z m 216.78407,-1.11929 c 5.50659,-3.98894 5.8795,-4.69112 3.91682,-7.37525 -1.37553,-1.88113 -2.16921,-7.16921 -2.16921,-14.45282 0,-10.86901 -0.2891,-11.80626 -5.37992,-17.44117 -2.95895,-3.27521 -10.01725,-8.66695 -15.68513,-11.98165 l -10.30523,-6.02673 5.22397,-6.10304 5.22398,-6.10304 1.37785,-42.05535 c 0.75782,-23.13046 1.46308,-48.06892 1.56725,-55.41882 0.10423,-7.34989 0.75404,-20.49835 1.44416,-29.21878 l 1.25475,-15.85534 -6.51037,-2.60493 c -3.58071,-1.43272 -6.52176,-3.14127 -6.53567,-3.79679 -0.0142,-0.65553 -1.43526,-16.40261 -3.15857,-34.99352 l -3.13327,-33.80167 4.3377,-3.52957 c 2.38573,-1.94126 4.92462,-3.53309 5.64195,-3.53738 2.58746,-0.0157 -0.67463,-21.26049 -4.46713,-29.09296 -3.46089,-7.14762 -4.23475,-13.13876 -8.52926,-66.03116 -2.59767,-31.99366 -5.108,-71.61236 -5.57852,-88.04154 -0.4705,-16.42918 -1.28415,-39.2453 -1.80809,-50.70249 l -0.95263,-20.83126 -20.17736,0 -20.17734,0 -0.84094,5.10956 c -0.46252,2.81025 -4.38925,34.78175 -8.72606,71.04777 -9.13662,76.40349 -8.09181,73.19886 -23.86511,73.19886 l -9.15898,0 0,21.28693 c 0,18.18434 0.45829,22.18526 3.14435,27.45035 2.35434,4.61488 3.14434,9.26601 3.14434,18.51222 l 0,12.34882 -5.5026,2.624 -5.5026,2.624 0,30.39158 0,30.39157 5.5026,2.624 5.5026,2.624 0,12.66544 c 0,9.23719 -0.79492,14.24428 -2.93679,18.49844 -2.87007,5.70051 -2.86584,7.45784 0.18642,77.36675 l 3.12317,71.53375 4.68776,4.954 4.68776,4.95401 -10.76981,5.13972 c -12.96281,6.18628 -27.33026,19.90489 -29.93178,28.58 -1.61016,5.3693 -1.50042,5.89563 1.22918,5.89563 4.10832,0 4.02113,7.70726 -0.14715,13.00637 -1.72939,2.19855 -3.14434,5.47761 -3.14434,7.28678 l 0,3.28941 73.90562,0 73.90562,0 6.08601,-4.4087 z m -0.52422,-52.58247 c -4.09671,-33.993 -9.14778,-70.09273 -10.17306,-72.70645 -0.70543,-1.79835 -1.72009,10.28257 -2.37681,28.29906 -1.02849,28.21672 -1.4642,31.77885 -4.2535,34.77443 l -3.10765,3.33747 6.76988,3.9674 c 3.72342,2.18208 8.11674,5.45568 9.76291,7.2747 1.64619,1.819 3.30354,3.30728 3.68301,3.30728 0.37946,0 0.24232,-3.71425 -0.30478,-8.25389 z m -365.54083,4.23284 c 1.11781,-1.34687 5.13908,-4.26951 8.93615,-6.49474 l 6.90378,-4.04587 -4.02713,-4.20344 c -4.01985,-4.1958 -4.02715,-4.25526 -4.02715,-32.80951 0,-15.73334 -0.56125,-28.60608 -1.2472,-28.60608 -1.00944,0 -6.61381,37.59195 -10.72313,71.9268 -0.82957,6.9313 0.67886,8.45711 4.18468,4.23284 z M 445.79084,584.98029 c 0.83573,-1.08087 5.17968,-32.74045 9.65323,-70.35462 l 8.13375,-68.38941 -0.0277,-142.98287 -0.0278,-142.98286 -5.1844,5.02492 c -2.85142,2.7637 -6.77008,5.02492 -8.70814,5.02492 -3.41635,0 -3.50991,0.41927 -3.06949,13.75649 0.45278,13.71214 0.46819,13.75809 4.77957,14.25414 4.01652,0.46211 4.26891,0.91109 3.53537,6.28868 -0.43447,3.18506 -2.20714,23.83169 -3.93926,45.88137 -1.73211,22.04969 -3.54325,43.09712 -4.02474,46.77207 l -0.87545,6.68173 -76.86877,0 -76.86877,0 -0.81264,-5.10956 c -0.44694,-2.81025 -2.24951,-23.50394 -4.00568,-45.98598 -1.7562,-22.48204 -3.58078,-43.83275 -4.05465,-47.44606 -0.82226,-6.26981 -0.66065,-6.59267 3.54141,-7.07476 l 4.40299,-0.50514 0,-13.34192 c 0,-12.10571 -0.29134,-13.3942 -3.14434,-13.9062 -1.72939,-0.31035 -5.44364,-2.75812 -8.2539,-5.43949 l -5.10955,-4.87521 -0.0168,143.76895 -0.0168,143.76895 8.06479,67.60332 c 4.43563,37.18183 8.77471,68.48767 9.6424,69.56854 1.22238,1.52271 18.48296,1.96521 76.65678,1.96521 58.20483,0 75.42068,-0.44168 76.59866,-1.96521 z m -177.21756,-317.18536 0,-169.794403 -27.36685,0 -27.36685,0 -16.82433,15.213133 c -14.30357,12.93379 -17.211,14.93047 -19.40522,13.32653 -1.41948,-1.03764 -7.32802,-4.1693 -13.13009,-6.95924 -10.42563,-5.01322 -10.54993,-5.14742 -10.61214,-11.4579 -0.066,-6.69302 -4.41216,-13.266861 -8.77114,-13.266861 -4.19805,0 -8.58569,6.025821 -8.58569,11.791281 0,4.31688 -0.63027,5.5026 -2.92491,5.5026 -1.6087,0 -6.03043,0.39174 -9.82607,0.87055 l -6.90115,0.87055 -13.36345,-16.511293 C 85.996799,75.759382 86.548349,75.781463 63.011999,95.759164 c -9.7278,8.256986 -17.68692,15.618666 -17.68692,16.359296 0,0.74064 -0.39348,2.37201 -0.8744,3.62528 -0.53508,1.39439 4.68515,8.84641 13.45177,19.2028 10.15253,11.99361 14.00875,17.66501 13.23661,19.46725 -0.59927,1.39872 -2.12832,6.96486 -3.39789,12.36919 -2.21462,9.42721 -2.50491,9.82607 -7.15132,9.82607 -5.20531,0 -12.12042,5.24334 -12.12042,9.19024 0,4.67886 4.98104,8.10363 11.78609,8.10363 6.38257,0 6.64279,0.20269 8.57843,6.68173 1.0979,3.67494 3.33232,9.30657 4.96536,12.51472 1.63305,3.20816 2.96918,6.44181 2.96918,7.18592 0,0.7441 -7.4285,7.94053 -16.50779,15.99207 -13.03168,11.55655 -16.50766,15.50583 -16.50719,18.75491 4.1e-4,2.78356 16.79304,29.30496 51.88103,81.93815 l 51.880421,77.82243 6e-4,9.51163 c 3.4e-4,5.30091 0.83579,10.34682 1.88721,11.39824 1.39992,1.39992 17.01437,1.8866 60.52856,1.8866 l 58.64195,0 0,-169.79439 z M 588.9816,435.70272 c 1.06855,-1.06856 1.8866,-6.18651 1.8866,-11.80315 l 0,-9.91656 51.88162,-77.79867 c 30.80162,-46.18832 51.88162,-79.27823 51.88162,-81.44012 0,-2.65315 -4.68877,-7.81562 -17.27606,-19.02141 l -17.27606,-15.37996 3.78414,-6.53825 c 2.08127,-3.59602 4.57668,-9.54501 5.54537,-13.21995 1.69754,-6.44001 1.98657,-6.68173 7.98933,-6.68173 6.23389,0 12.51677,-4.09223 12.51677,-8.15256 0,-3.9625 -6.81837,-9.14131 -12.03537,-9.14131 -4.39198,0 -5.3465,-0.67083 -6.15186,-4.32347 -0.5243,-2.37791 -1.97994,-8.06336 -3.23478,-12.63435 l -2.2815,-8.31087 13.42392,-15.80679 c 18.13895,-21.35875 18.22498,-20.61348 -4.58639,-39.732123 -23.20981,-19.452584 -23.21521,-19.45283 -37.70384,-1.71487 -16.44099,20.128133 -16.12292,19.904643 -26.5785,18.675793 -8.72188,-1.02508 -8.89322,-1.14135 -8.89322,-6.03491 0,-5.3061 -4.81588,-11.871271 -8.70819,-11.871271 -4.68439,0 -8.58568,6.015521 -8.58568,13.238531 0,6.45706 -0.33734,7.02394 -4.75755,7.99478 -2.61664,0.57472 -8.34754,3.46084 -12.73535,6.4136 -4.38778,2.95277 -8.43731,5.34313 -8.99894,5.31191 -0.56163,-0.0312 -8.44965,-6.75063 -17.52893,-14.93204 l -16.50779,-14.875293 -27.11994,-0.004 -27.11994,-0.004 0,169.794403 0,169.79439 58.64196,0 c 43.51418,0 59.12863,-0.48668 60.52856,-1.8866 z M 441.51202,295.55746 c 0,-3.32945 6.12044,-76.45933 7.09327,-84.75371 0.84153,-7.175 0.71964,-7.46781 -3.1087,-7.46781 l -3.98457,0 0,-19.65212 0,-19.65213 5.25892,0 c 3.06792,0 6.32615,-1.17926 7.82048,-2.83049 2.37393,-2.62315 2.31071,-3.60201 -0.86296,-13.36344 l -3.42452,-10.53297 -12.15703,0 -12.15702,0 -4.42326,-8.25389 -4.42325,-8.2539 -47.9512,0 -47.95119,0 -4.42326,8.2539 -4.42325,8.25389 -12.15703,0 -12.15703,0 -3.42451,10.53297 c -3.17368,9.76143 -3.2369,10.74029 -0.86297,13.36344 1.49433,1.65123 4.75256,2.83049 7.82048,2.83049 l 5.25893,0 0,19.65213 0,19.65212 -4.04356,0 c -3.94739,0 -4.02154,0.19631 -3.11773,8.2539 0.90218,8.04295 7.16129,82.1195 7.16129,84.7537 0,0.72745 32.54392,1.32262 72.31983,1.32262 59.4323,0 72.31984,-0.37578 72.31984,-2.1087 z m 22.01038,-167.68569 0,-29.871243 -94.33022,0 -94.33022,0 0.12326,29.478203 0.12326,29.47819 4.32872,-12.57736 4.3287,-12.57737 12.84774,-0.45671 12.84775,-0.45672 3.95112,-7.79718 3.95102,-7.79717 51.82865,0 51.82866,0 3.98339,7.86085 3.98339,7.86085 12.45337,0 12.45336,0 4.35199,13.36345 c 2.3936,7.34989 4.55991,13.36345 4.81403,13.36345 0.25411,0 0.46203,-13.44206 0.46203,-29.87124 z"
              style={{ fill: this.strokeColor }}
            ></path>
          </g>
        </g>
      </svg>
    );
  };
}

interface IQuadArmorDiagramSVGProps {
  bgColor?: string;
  strokeColor?: string;

  yLoc?: number;
  xLoc?: number;

  width?: number;
}

interface IQuadArmorDiagramSVGState {}
