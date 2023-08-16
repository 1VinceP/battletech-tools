import React from "react";
import { CONST_HIGHLIGHT_COLOR } from "../../../configVars";

export default class TakeDamageButtonSVG extends React.Component<
  ITakeDamageButtonSVGProps,
  ITakeDamageButtonSVGState
> {
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };
  render = (): JSX.Element => {
    return (
      <svg
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        onClick={this.onClick}
        className={this.props.onClick ? "cursor-pointer" : ""}
        viewBox="0 0 210 210"
      >
        <g>
          <circle
            cx="105.15"
            cy="105.15"
            r="103.93"
            fill={CONST_HIGHLIGHT_COLOR}
            fillRule="evenodd"
            strokeWidth=".26458"
          />
        </g>
        <g fill="#fff">
          <path
            d="m64.556 163.02c0.33435-0.29763 0.50725-0.76889 0.80822-2.203 0.26333-1.2548 0.40561-1.6348 0.8535-2.2797l0.29367-0.42285 0.21832 0.70163c0.12008 0.38589 0.32021 0.92576 0.44474 1.1997l0.22641 0.49806 0.47532-1.4552 0.95651-0.24825c0.52609-0.13654 1.3556-0.43523 1.8433-0.66376l0.88682-0.41551 0.20594-0.72358c0.26715-0.93865 0.44841-1.3205 0.81312-1.7128l0.29763-0.32017 0.83383 0.18725c0.94083 0.21127 1.2834 0.1287 1.7273-0.41627 0.13495-0.1657 0.43366-0.33957 0.71427-0.41575 0.47965-0.13021 1.665-0.90807 1.665-1.0926 0-0.2827-0.79294-0.76926-1.6016-0.98273-0.31484-0.0831-0.75444-0.25619-0.97687-0.38462l-0.40444-0.23348 0.70037-0.79845 0.70037-0.79844-0.14455-0.47392c-0.0795-0.26066-0.19681-1.2015-0.2607-2.0908-0.0639-0.88928-0.15716-1.6169-0.20729-1.6169-0.32323 0-0.82168-0.43746-1.1336-0.99489-0.19142-0.34209-0.57397-0.94603-0.85011-1.3421-0.27615-0.39605-0.49403-0.77239-0.48419-0.83632 0.20534-1.3341 0.23285-1.4008 0.85272-2.0692 0.80543-0.86835 0.73866-0.94697-0.80205-0.94438-0.75933 1e-3 -1.23 0.0513-1.3797 0.14668-0.20614 0.13128-0.26294 0.10826-0.61112-0.24772-0.60179-0.61526-1.0574-0.91826-2.1083-1.402-1.5647-0.72034-2.325-1.3444-2.325-1.9084 0-0.11796-0.0144-0.21446-0.032-0.21446s-0.36126 0.12786-0.76366 0.28413-1.4854 0.53636-2.4068 0.84464c-1.0148 0.33957-2.0614 0.7772-2.6551 1.1102-0.53899 0.30235-1.0078 0.51186-1.0417 0.46559-0.034-0.0463-0.21251-0.30994-0.39679-0.58592-0.45272-0.67804-1.2073-1.6767-1.2395-1.6403-0.0143 0.0162 0.0129 0.22881 0.0603 0.47247 0.0475 0.24365 0.13366 0.92991 0.19146 1.525l0.10508 1.082-0.43127 0.70215c-0.23719 0.38618-0.55329 0.97813-0.70243 1.3154-0.66477 1.5035-1.9678 3.2199-2.7753 3.6557-0.18237 0.0984-0.31736 0.20683-0.29997 0.24092 0.0174 0.0341 0.16837 0.38815 0.3355 0.7868 0.40071 0.95577 0.53822 1.7648 0.51494 3.0297-0.0176 0.95712 8e-3 1.1166 0.32386 1.9938l0.34301 0.95344-0.38949 0.49618c-0.46871 0.5971-2.7323 3.9664-2.7323 4.067 0 0.12024 0.58281-0.0657 1.4594-0.46564l0.83728-0.38199 0.25579 0.27045c0.37071 0.39195 0.875 0.65273 1.2622 0.65273 0.20561 0 0.75702-0.22922 1.4104-0.58631 1.1902-0.65049 1.2689-0.6459 1.4825 0.0868 0.13261 0.45474 0.0806 1.2318-0.1912 2.8556-0.13331 0.79652-0.14928 1.0555-0.0584 0.94782 0.11317-0.13417 1.0838-2.0086 1.1507-2.2222 0.0153-0.049 0.30214 0.0601 0.6373 0.24253 0.33515 0.18242 0.9306 0.42103 1.3232 0.53025l0.71387 0.19858 0.33128 1.1088c0.18221 0.60986 0.37842 1.5354 0.43604 2.0567 0.12806 1.1588 0.24307 1.3009 0.7139 0.88177zm-0.51109-9.5826c-0.0928-0.18668-0.278-0.3648-0.4142-0.39837-0.38952-0.096-0.97584-0.39901-1.1002-0.56853-0.0749-0.10209-0.21058-0.1309-0.39761-0.0844-0.37804 0.094-0.5979-0.11673-0.52323-0.50145 0.0435-0.22419-4e-3 -0.3586-0.20227-0.56765-0.14262-0.15065-0.34953-0.47308-0.45981-0.71652s-0.28828-0.57697-0.39556-0.74117c-0.16389-0.25087-0.17866-0.35826-0.0925-0.67247 0.0564-0.20566 0.15167-0.77536 0.21172-1.266 0.17052-1.3933 0.34842-2.2075 0.50249-2.2996 0.0777-0.0465 0.26811-0.11494 0.42305-0.1521 0.15493-0.0372 0.51107-0.31306 0.7914-0.61309 0.66848-0.71546 1.5328-1.2288 2.0654-1.2266 0.42675 2e-3 1.5699 0.37115 2.3302 0.75298 0.61937 0.31105 2.0101 1.9447 2.1591 2.5363 0.0616 0.24455 0.13927 0.92413 0.17261 1.5102l0.0606 1.0655-0.39814 0.94163c-0.21897 0.5179-0.50228 1.0779-0.62957 1.2444-0.12728 0.16653-0.71235 0.63358-1.3002 1.0379-0.89482 0.61548-1.1549 0.7422-1.5983 0.77874-0.29127 0.024-0.61665 0.0964-0.72308 0.16083-0.27374 0.16579-0.2948 0.15615-0.48202-0.22044z"
            strokeWidth=".027734"
          />
          <path
            d="m62.688 62.491c0.5022-0.61066 0.7402-0.62111 2.7957-0.12278 0.76015 0.18429 1.7441 0.24877 3.4545 0.22638 2.0702-0.02712 2.4987 0.0131 3.1887 0.29914 0.43845 0.18175 1.0284 0.38361 1.311 0.44858 0.28258 0.06498 0.89442 0.49647 1.3596 0.95888l0.84585 0.84075 0.38917-0.32107c0.21404-0.17659 0.7441-0.88097 1.1779-1.5653 0.94401-1.4892 1.436-1.9457 2.1145-1.9624 0.27942-0.0069 1.3052 0.35424 2.2796 0.80248 2.709 1.2463 2.5687 1.2491 2.5687-0.05099 0-0.86392-0.10238-1.2852-0.48716-2.0046-0.65535-1.2252-0.68007-2.9738-0.06635-4.6945l0.4208-1.1799h1.4893c1.7337 0 2.3576 0.20028 3.3167 1.0646l0.68731 0.61946-0.07606-0.59856c-0.06887-0.54194-0.04172-0.58879 0.28704-0.49534 0.49386 0.14039 2.1731 0.94077 2.9308 1.3969l0.619 0.37266-0.42975-0.5696c-0.23637-0.31328-1.5985-1.6315-3.0269-2.9294-3.3966-3.0862-3.5388-3.2717-3.5388-4.6155 0-0.5813-0.0843-1.6137-0.18734-2.2943-0.10304-0.68057-0.13946-1.376-0.08094-1.5454 0.15933-0.46116 1.0862-1.2318 1.874-1.5582 0.38349-0.15886 0.69726-0.34123 0.69726-0.40524 0-0.16718-1.1689-0.85397-2.4922-1.4643-0.6267-0.28905-1.6188-0.81357-2.2046-1.1656-0.92312-0.55472-1.169-0.81891-1.8442-1.9817-0.73064-1.2581-0.77266-1.3994-0.67492-2.2693 0.08313-0.73994 0.05303-0.92767-0.14871-0.92767-0.31155 0-0.32046 0.08229 0.10146-0.93752 0.51015-1.233 0.44646-1.3267-0.39868-0.58633-0.41409 0.36276-1.0178 0.82618-1.3415 1.0298-0.62264 0.39167-2.1586 0.88316-2.1554 0.68968 0.0014-0.06285 0.12043-0.47314 0.26527-0.91176 0.14485-0.43862 0.42514-1.8301 0.62288-3.0921 0.19774-1.262 0.47097-2.7334 0.60719-3.2697 0.13621-0.53631 0.21195-1.0079 0.1683-1.048-0.1309-0.12025-1.7965 1.4464-3.0161 2.8368-0.82407 0.93952-1.2973 1.6773-1.7001 2.6505l-0.55816 1.3485-0.55411-0.82527c-0.55048-0.81987-0.55624-0.8231-0.88033-0.49412-0.66782 0.67791-0.80239 0.46087-1.2456-2.0088-0.06227-0.34715-0.30702-1.0337-0.54384-1.5256-0.23683-0.49194-0.43059-1.0636-0.43059-1.2704 0-0.20681-0.08921-0.58217-0.19827-0.83415l-0.19827-0.45814-0.17392 0.48823c-0.09565 0.26853-0.59516 1.4769-1.11 2.6852-0.51486 1.2084-1.0477 2.4888-1.1842 2.8454-0.23262 0.608-1.1491 1.3859-1.6328 1.3859-0.1064 0-0.63271-0.45033-1.1696-1.0007-2.0403-2.0917-3.1704-3.1405-3.2779-3.0418-0.0612 0.05622-0.12827 1.355-0.14904 2.8863-0.03729 2.7519-0.04299 2.7889-0.49304 3.2023l-0.45528 0.41825-0.57644-1.6797c-0.71219-2.0753-1.5468-3.5466-2.6144-4.609l-0.81766-0.81371 0.13149 0.73234c0.07232 0.40279 0.19922 1.6478 0.282 2.7666 0.08277 1.1189 0.29324 2.4737 0.46772 3.0107 0.33052 1.0174 0.40604 2.3613 0.18747 3.3362l-0.1277 0.5696-1.9927 0.0019c-1.5769 0.0013-2.1146 0.06236-2.5768 0.29292l-0.58404 0.29134 0.45964 0.50184c0.64877 0.7083 1.0866 1.5684 1.195 2.3475l0.09303 0.6686-1.1807-0.07761c-1.3859-0.0911-1.6597 0.08919-1.7145 1.129-0.01902 0.35965-0.16079 0.76991-0.3151 0.91167-0.25601 0.23518-0.21127 0.32583 0.51077 1.035 0.43525 0.42747 0.79136 0.89987 0.79136 1.0498 0 0.71513-2.1474 1.857-3.4923 1.857-0.60653 0-1.4962 0.38615-1.9637 0.8523l-0.40718 0.40602 1.3753 0.6c1.1052 0.48218 1.6809 0.88424 2.9316 2.0475 0.85596 0.79613 1.5563 1.5246 1.5563 1.6188 0 0.09422-0.23916 0.17133-0.53146 0.17133-0.2923 0-0.53146 0.05277-0.53146 0.11734 0 0.06453 0.4487 0.53388 0.99711 1.043l0.99712 0.92566-0.80333 0.9506c-0.9541 1.129-2.0051 2.0582-3.2581 2.8805-0.87779 0.57607-2.0961 1.7044-1.9677 1.8224 0.03382 0.03106 0.81015-0.15919 1.7252-0.42275 0.91508-0.26355 2.4872-0.62259 3.4937-0.79786 1.0064-0.17527 2.239-0.50743 2.739-0.73814 0.5-0.23071 0.94135-0.38985 0.98076-0.35364 0.03943 0.03622-0.08941 0.45524-0.28626 0.93119l-0.35793 0.86536 0.97675-0.88591c0.53721-0.48725 1.1902-1.1788 1.451-1.5369 0.26083-0.35804 0.50507-0.68759 0.54275-0.73234 0.18821-0.22354 1.3335 1.3464 1.9984 2.7394 0.41303 0.86532 0.94562 1.9761 1.1835 2.4684l0.43258 0.89508 0.35218-1.0578c0.1937-0.5818 0.55354-1.3027 0.79964-1.6019zm6.3388-7.5036c-2.2171-0.09202-2.3505-0.11814-3.5767-0.69994-0.70055-0.33239-1.418-0.79486-1.5944-1.0277-0.17635-0.23284-0.55097-0.61861-0.83248-0.85727-0.2815-0.23865-0.8578-0.90993-1.2806-1.4917-0.42284-0.5818-0.88559-1.2043-1.0283-1.3833-0.14274-0.17902-0.31165-0.87474-0.37538-1.5461-0.10863-1.1443-0.0769-1.3089 0.50805-2.6343 0.55694-1.262 0.7789-1.5525 2.0677-2.7066 0.80168-0.71791 1.7728-1.42 2.1836-1.5786 0.4069-0.1571 1.1473-0.45917 1.6454-0.67124l0.90559-0.38559 1.8403 0.35172c1.0121 0.19344 2.199 0.39528 2.6374 0.44852 0.64094 0.07783 0.80784 0.16557 0.8516 0.44767 0.03168 0.2043 0.2215 0.38939 0.45438 0.44308 0.21997 0.05074 0.70004 0.49249 1.0668 0.9817 0.36822 0.49116 0.76474 0.85498 0.88543 0.81244 0.69321-0.24438 1.1817 1.3208 1.456 4.6652l0.11438 1.3945-0.62157 0.80248c-0.34187 0.44137-0.79401 1.117-1.0048 1.5015-0.21075 0.38444-0.6758 0.99654-1.0334 1.3602-0.66186 0.67301-2.5642 1.9521-2.8234 1.8985-0.07842-0.01625-1.1789-0.07255-2.4456-0.12512z"
            strokeWidth=".011886"
          />
          <path
            d="m135.06 38.4c0.19771 0.23827 0.67329 0.67426 1.0569 0.96887 1.0121 0.77735 1.5257 1.2366 1.5175 1.3567-4e-3 0.05802-0.66012 0.34142-1.4581 0.62978-1.1806 0.4266-1.6729 0.53859-2.6419 0.60097l-1.191 0.07666 0.81997 0.58596c0.62861 0.44927 1.0134 0.65068 1.649 0.86346 0.45596 0.15262 0.92587 0.31341 1.0443 0.3573 0.25234 0.09355 0.23079 0.66403-0.0837 2.2181-0.30655 1.5147-0.18291 3.0294 0.32536 3.9859 0.27071 0.50942 1.4539 1.626 2.4037 2.2683l0.68479 0.46332-0.0208 0.79181c-0.0114 0.4355 0.056 1.4859 0.14991 2.3343 0.16835 1.5215 0.17771 1.552 0.68401 2.2347 0.51028 0.68813 1.2978 1.615 1.4702 1.7303 0.0496 0.03321 0.14301-0.2104 0.20795-0.54108 0.0647-0.33081 0.30084-1.1203 0.52463-1.7545 0.2238-0.63414 0.44466-1.4442 0.4908-1.8001 0.0462-0.35592 0.11805-0.69618 0.15979-0.75615 0.0418-0.05997 0.27174-0.13306 0.51108-0.16244 0.62187-0.07633 2.4903 0.15006 2.48 0.30048-0.0319 0.46847 1.0209 1.5864 2.3004 2.4426l0.58792 0.39342 1e-3 -0.37973c2e-3 -0.76771 0.27505-1.8523 0.638-2.5362 0.41748-0.78652 1.243-1.7637 1.639-1.94 0.1444-0.0643 0.58499-0.35685 0.97909-0.65013 0.79764-0.59358 0.95775-0.62901 2.4297-0.53762 0.8002 0.04969 2.3708 0.41564 3.5709 0.83204 0.42098 0.14606 0.43949 0.14122 0.41079-0.10746-0.0632-0.54777-0.7475-1.6519-1.5738-2.5394-0.51667-0.55494-0.98162-1.1747-1.2394-1.652-0.3776-0.69919-0.40491-0.8243-0.32218-1.4764 0.0497-0.39185 0.18186-1.0156 0.29369-1.3862 0.11182-0.37057 0.15649-0.70162 0.0993-0.73566-0.0572-0.03405-0.30929-0.15368-0.56017-0.26582-0.25089-0.11214-0.4374-0.23085-0.41447-0.26379 0.0556-0.07983 1.8938-0.4201 2.377-0.44003l0.38182-0.01573-0.21531-0.40432c-0.11842-0.22238-0.34335-0.56344-0.49986-0.75788-0.24305-0.30199-0.28672-0.52001-0.29943-1.4949l-0.0148-1.1413 0.93958-1.4276c0.78452-1.192 0.96518-1.5294 1.0947-2.0442 0.0853-0.33913 0.15401-0.72899 0.15266-0.86635-2e-3 -0.23266-0.0283-0.22738-0.38033 0.07718-0.31556 0.273-0.63249 0.37472-1.9213 0.61668l-1.5434 0.28971 0.10803-0.5052c0.0594-0.27786 0.0804-0.52368 0.0467-0.54628-0.12476-0.08348-1.6217 0.36326-2.2162 0.66142-0.33778 0.1694-0.63067 0.27895-0.65085 0.24345-0.0201-0.03549-0.23261-0.4373-0.47204-0.89291s-0.57459-0.99159-0.74481-1.1911c-0.44726-0.52413-0.62538-0.896-0.75016-1.5662-0.10566-0.56759-0.11965-0.58782-0.32882-0.47569-0.39092 0.20955-1.183 0.95699-1.5062 1.4212l-0.31578 0.4536-0.44144-0.13459c-0.2428-0.07403-0.97912-0.20146-1.6363-0.28319l-1.1948-0.1486-0.29949-0.77973c-0.16472-0.42886-0.48529-1.4082-0.71237-2.1763-0.37722-1.276-0.68575-1.9016-1.24-2.5146-0.25507-0.28209-0.32368-0.17848-0.58559 0.88438-0.32364 1.3132-0.52259 2.7729-0.57951 4.2516-0.062 1.6118-0.22226 2.7287-0.51016 3.5563l-0.20984 0.60321-0.67287 0.09199c-0.37007 0.0506-1.06 0.15978-1.5332 0.24266-1.0703 0.18741-1.8752 0.20457-2.8199 0.06011-0.40292-0.0616-0.7454-0.09362-0.76103-0.07117-0.0156 0.02248 0.13333 0.2358 0.33103 0.47408zm7.5217 1.7069c0.49611-0.36528 0.87963-0.50935 1.3605-0.51111 0.23207-8.39e-4 0.64856-0.10329 0.92552-0.22764 0.80833-0.36293 1.4827-0.35134 2.922 0.05018 1.2607 0.35171 1.3054 0.3728 1.7372 0.81956 0.86436 0.89446 1.4763 2.3422 1.5137 3.581 0.0455 1.5057 0.0125 1.6299-0.75178 2.837-1.2214 1.9289-1.1499 1.855-2.2829 2.3596-1.0382 0.46229-1.7348 0.56008-3.1754 0.44575-0.29533-0.02343-0.66896-8e-3 -0.83031 0.03423-0.30421 0.07968-0.60595-0.04396-0.59241-0.24273 4e-3 -0.06287-0.52899-0.46132-1.1852-0.88561-1.1755-0.76003-1.1933-0.77622-1.2121-1.1056-0.0105-0.18386-0.0656-0.61947-0.12231-0.968-0.0567-0.34852-0.0704-1.0661-0.0302-1.5945 0.0401-0.52846 0.0654-1.1265 0.0563-1.3291-9e-3 -0.20252 0.053-0.50522 0.13806-0.67268 0.085-0.16747 0.35859-0.72527 0.60781-1.2396 0.53298-1.1 0.48446-1.0289 0.92152-1.3507z"
            strokeWidth=".0073854"
          />
          <path
            d="m124.3 136.32c0.12511-0.42082 0.26412-1.3226 0.30891-2.0039 0.11821-1.7978 0.25459-2.7622 0.40294-2.8496 0.0716-0.0422 0.92454 0.48895 1.8954 1.1803 1.4363 1.0227 1.9574 1.5023 2.7965 2.5736l1.0313 1.3167 0.044-1.4212c0.0338-1.0896-0.0324-1.6973-0.28328-2.6043-0.18002-0.65072-0.36142-1.3242-0.40313-1.4966-0.0889-0.36744 0.60161-0.80218 2.6847-1.6903 2.0304-0.86567 3.7209-2.2292 4.4486-3.5882 0.38755-0.7238 0.77099-2.993 0.77897-4.6099l6e-3 -1.1659 0.9512-0.61395c0.52317-0.33768 1.71-1.2622 2.6374-2.0544 1.6632-1.4208 1.6918-1.4562 2.0979-2.5924 0.40927-1.1451 0.88134-2.8034 0.88134-3.0959 0-0.0842-0.36137 4e-3 -0.80306 0.19529-0.44169 0.1916-1.5603 0.55449-2.4857 0.80642s-2.0562 0.649-2.5129 0.88237c-0.45664 0.23338-0.91514 0.42432-1.0189 0.42432s-0.37175-0.2073-0.59551-0.46065c-0.58137-0.65828-1.7901-3.0033-1.6044-3.1126 0.57828-0.34051 1.0663-2.4599 1.0663-4.6308v-0.9975l-0.44915 0.30471c-0.90806 0.61606-2.4041 1.1742-3.4981 1.3051-1.2583 0.15055-3.0641-0.0177-3.5851-0.33393-0.18998-0.11534-0.88342-0.38957-1.541-0.60942-1.3309-0.44494-1.4992-0.60171-2.5541-2.379-0.57349-0.96624-1.3822-3.079-1.8387-4.8036-0.16013-0.60496-0.18046-0.62247-0.45137-0.38887-0.59674 0.51454-1.3597 2.1962-1.7547 3.8677-0.24698 1.0452-0.61132 2.0827-0.97122 2.7657-0.52714 1.0004-0.65327 1.1328-1.4884 1.5625-0.50187 0.2582-1.3427 0.60785-1.8685 0.77702-0.52582 0.16917-0.95193 0.38421-0.94691 0.47787 5e-3 0.0937 0.0629 0.48181 0.12871 0.86257 0.0658 0.38075 0.073 0.69227 0.016 0.69227-0.13814 0-1.992-1.8535-2.3973-2.3968l-0.3202-0.42925-0.30724 0.57499c-0.16899 0.31625-0.39393 0.8514-0.49984 1.1892-0.16451 0.52465-0.3874 0.75087-1.5282 1.5511l-1.3356 0.93683-2.4277 0.0628c-2.027 0.0524-2.5681 0.1152-3.2781 0.3801-0.46776 0.17451-0.98228 0.40912-1.1434 0.52136-0.27287 0.1901-0.24607 0.21598 0.39157 0.37804 0.57158 0.14528 0.94203 0.43014 2.2458 1.7269l1.5612 1.5529-0.68177 0.28202c-0.37497 0.15511-0.68177 0.32888-0.68177 0.38616 0 0.21167 1.7099 1.5843 2.5316 2.0322 0.46682 0.25447 0.82753 0.5052 0.80157 0.55716-0.026 0.0519-0.3325 0.62159-0.68124 1.2658s-0.71671 1.464-0.81773 1.8218c-0.26543 0.94001-0.56374 1.4458-1.2564 2.1303-0.5866 0.57964-0.59943 0.61213-0.30182 0.76388 0.55621 0.28362 2.0644 0.59823 2.8677 0.59823h0.78496l0.18984 0.6194c0.10441 0.34067 0.53565 1.2956 0.95829 2.1221l0.76845 1.5027-0.68393 0.97492c-0.37617 0.53621-1.2791 1.6964-2.0065 2.5781-1.2083 1.4647-1.7032 2.3259-1.989 3.4614-0.13152 0.52253 0.045 0.51845 1.5067-0.0348 1.806-0.68355 3.6864-1.6294 5.4771-2.755 1.9518-1.2269 3.397-1.9414 4.6014-2.275l0.8779-0.24316 0.64016 0.70469c0.35208 0.38757 1.026 1.0982 1.4977 1.5791 1.0667 1.0878 1.7228 2.0056 2.2986 3.2154 0.24558 0.516 0.47832 0.9382 0.51718 0.9382 0.0389 0 0.17305-0.34432 0.29817-0.76515zm-3.927-10.081c-0.82315-0.2799-1.2962-0.60771-1.6782-1.1629-0.18434-0.26793-0.63429-0.66745-0.99989-0.88782-1.067-0.64317-1.5861-1.4331-2.2491-3.4225-0.58073-1.7426-0.59115-1.8114-0.40478-2.671 0.37313-1.7212 1.5988-3.596 3.0318-4.6374 1.7417-1.2658 1.9144-1.3278 3.9431-1.4158 3.2421-0.14056 3.0983-0.16377 4.5891 0.74115 1.3659 0.82912 2.0316 1.5566 3.0347 3.3161 0.20564 0.36071 0.51899 0.78077 0.69634 0.93347 0.33439 0.28791 0.4268 0.73678 0.18143 0.88127-0.0776 0.0457-0.12672 0.98399-0.10921 2.0854 0.0314 1.973 0.0263 2.0066-0.34773 2.2938-0.20875 0.16031-0.67954 0.575-1.0462 0.92153-0.36662 0.34651-1.203 0.94043-1.8586 1.3198-0.65558 0.37937-1.3817 0.83194-1.6135 1.0057-0.23187 0.17377-0.6383 0.34577-0.9032 0.38222-0.2649 0.0365-1.1395 0.16933-1.9436 0.29531-1.7196 0.26941-1.5973 0.26827-2.3225 0.0217z"
            strokeWidth=".010452"
          />
          <path
            d="m154.11 166.79c1.9838-1.8779 2.817-2.7737 3.1596-3.397l0.46523-0.84659 0.44237 0.5551c0.24331 0.30531 0.93698 1.0601 1.5415 1.6773 0.60452 0.61722 1.4255 1.558 1.8244 2.0907l0.72533 0.96843 0.34713-1.1433c0.19092-0.62884 0.41862-1.3217 0.50599-1.5396l0.15885-0.39626 0.96163 0.34276c0.52889 0.18852 1.2427 0.38714 1.5862 0.44141l0.62461 0.0986 0.58673-0.95589c0.56882-0.9267 1.5744-1.9187 3.6137-3.5649 0.5362-0.43283 1.2066-1.0424 1.4898-1.3546l0.51485-0.56757-0.46016-0.83157c-0.25309-0.45736-0.51038-1.0611-0.57175-1.3417-0.13875-0.63418-0.5835-1.4863-0.91087-1.7452-0.21709-0.17165-0.1209-0.24837 0.79189-0.63158 0.57144-0.23992 1.3257-0.46703 1.6761-0.5047 0.74591-0.0802 0.85614-0.29714 0.72036-1.4179-0.10666-0.88044 0.18939-1.32 1.2924-1.919 0.9864-0.53561 1.3613-0.87209 1.9684-1.7666 0.33138-0.48828 0.48987-0.87034 0.4325-1.0426-0.0498-0.14951-0.66691-0.78718-1.3714-1.4171-1.0849-0.97005-1.2952-1.2341-1.3749-1.7265-0.37824-2.3366-0.53845-2.8905-0.95766-3.3105-0.61104-0.61224-2.7168-1.9214-4.0048-2.4898l-1.0971-0.48418 0.48043-0.64622c0.26424-0.35541 0.96776-1.1198 1.5634-1.6986 0.59563-0.57881 1.0492-1.0845 1.008-1.1238-0.0412-0.0393-0.71837-8e-3 -1.5048 0.0695-1.1856 0.11687-1.8327 0.29274-3.7886 1.0298-1.2973 0.48888-2.3961 0.85327-2.4417 0.80977-0.1665-0.15865-0.3765-2.5228-0.2902-3.2672 0.0488-0.42083 0.0509-0.76515 5e-3 -0.76515-0.18164 0-1.407 0.64589-2.0309 1.0705-0.36244 0.24667-1.1515 1.0413-1.7534 1.7658l-1.0944 1.3173-0.11501-0.63374c-0.0632-0.34856-0.2379-0.87322-0.3881-1.1659-0.26692-0.52014-0.29507-0.53317-1.2431-0.57592-1.2026-0.0542-2.0671 0.20703-3.5317 1.0674l-1.1088 0.65131-1.0189-0.3861c-1.8545-0.70271-4.1106-1.7576-5.2159-2.4389-0.59944-0.36945-1.1222-0.67174-1.1616-0.67174-0.16672 0-0.0538 2.1964 0.14529 2.8268 0.11936 0.37785 0.48982 1.1261 0.82325 1.6628s0.73031 1.3108 0.88195 1.7202c0.27095 0.73163 0.27032 0.75096-0.0365 1.1226-0.2963 0.35889-0.48649 0.90202-0.77346 2.2087-0.12075 0.54984-0.17509 0.59449-1.1167 0.91745-0.89389 0.3066-1.1676 0.33196-2.8254 0.26174l-1.8356-0.0778 0.76483 0.65015c0.42066 0.35758 1.1655 0.855 1.6551 1.1054 0.52147 0.26663 0.86031 0.52964 0.81793 0.63489-0.25138 0.62412-1.2978 1.9201-1.9424 2.4055l-0.75976 0.5722 0.42049 0.317c0.23128 0.17434 1.0126 0.58624 1.7362 0.91532l1.3157 0.59832-0.28099 0.60521c-0.15454 0.33286-0.36055 1.1226-0.45778 1.7549-0.16813 1.0933-0.21352 1.1849-0.9244 1.867-0.41117 0.3945-0.69212 0.77011-0.62433 0.8347 0.29642 0.28241 2.0486 0.73549 3.1393 0.81174 1.0675 0.0747 1.1796 0.11062 1.099 0.35266-0.0494 0.14824-0.11328 0.8438-0.14198 1.5457-0.0287 0.70187-0.10364 1.433-0.16651 1.6248l-0.11431 0.34869 1.2665-0.10526c0.69659-0.0579 1.352-0.1365 1.4564-0.17468 0.34417-0.12584 0.99172 3.2048 0.99559 5.1207 2e-3 1.2518 0.21897 2.5888 0.63706 3.935l0.31684 1.0202 0.39195-0.5101c0.21557-0.28055 1.6044-1.6578 3.0863-3.0606zm3.8278-9.47c-0.21033-0.066-0.72659-0.12932-1.1472-0.14083-0.42066-0.0115-1.0119-0.10507-1.3138-0.2079-0.66175-0.22538-2.7398-1.7941-2.7398-2.0683 0-0.10718-0.19838-0.4769-0.44084-0.82159-0.73529-1.0453-1.0888-1.7661-1.0888-2.2199 0-0.23735-0.17271-0.66899-0.3838-0.9592-0.37285-0.51262-0.38006-0.56892-0.25296-1.9753 0.12576-1.3916 0.16433-1.5046 0.99566-2.9176 0.47565-0.80849 0.86482-1.603 0.86482-1.7657 0-0.50875 0.53352-0.96826 1.8998-1.6364l1.3201-0.64549 4.6352-0.171 1.1988 0.75143c0.65932 0.41328 1.4904 0.9785 1.8469 1.256 0.35647 0.27753 0.85479 0.60594 1.1074 0.7298 0.65284 0.32014 0.89208 0.6449 1.2078 1.6396 0.15265 0.48094 0.33906 1.0251 0.41425 1.2092 0.0752 0.18411 0.13672 0.60525 0.13672 0.93584 0 0.35477 0.10374 0.71027 0.25316 0.86758 0.22968 0.24181 0.23103 0.29018 0.0146 0.52157-0.13122 0.14028-0.35189 0.68134-0.49037 1.2024-0.13849 0.52103-0.44034 1.472-0.6708 2.1132-0.37891 1.0544-0.48637 1.2081-1.123 1.6066-0.38722 0.24236-1.008 0.70762-1.3796 1.0339-0.65789 0.57778-0.96106 0.71383-3.0286 1.3592-1.3895 0.43367-1.4086 0.43682-1.8356 0.30293z"
            strokeWidth=".010452"
          />
          <path
            d="m107.32 89.46c0.81032-1.2923 1.1927-2.206 1.4848-3.5481 0.4461-2.0498 1.1082-3.1672 2.0472-3.4547 0.34085-0.10435 0.5601-0.0968 1.1141 0.0383 0.37937 0.0925 0.70685 0.14981 0.72775 0.12738 0.0209-0.0224-0.61096-0.91478-1.4041-1.983-0.79317-1.0682-1.4421-1.973-1.4421-2.0106 0-0.0376 0.0684-0.0684 0.15203-0.0684 0.30088 0 1.11-1.0102 1.5154-1.8919 0.22102-0.48078 0.40187-0.92304 0.40187-0.9828 0-0.0622-0.18268-0.0854-0.42744-0.0541-0.63533 0.081-0.97484-0.31541-1.7984-2.1001-0.37143-0.80485-0.83602-1.6711-1.0324-1.9249-0.19639-0.25384-0.33608-0.53681-0.31041-0.6288 0.1211-0.43397 0.75889-1.7651 1.1154-2.3281l0.39705-0.62689-0.4253-0.14064c-0.23391-0.0773-0.79073-0.17253-1.2374-0.21152l-0.81207-0.0709 0.073-0.6248c0.15164-1.2968 0.0896-2.0198-0.24179-2.8192-0.16983-0.40966-0.49559-0.97417-0.7239-1.2545-0.41419-0.50851-0.65923-0.66022-0.55104-0.34116 0.13519 0.39866-0.0799 0.90286-0.67132 1.5734-0.95357 1.0812-2.0802 1.6034-3.459 1.6034h-0.70263l-0.11604-0.58542c-0.0638-0.32198-0.22862-0.86006-0.36621-1.1957l-0.25018-0.61031-0.19105 0.34146c-0.25157 0.44965-0.97438 0.87375-1.7684 1.0376-0.83453 0.17217-1.473 0.39982-2.2877 0.81571l-0.66184 0.33786-0.34948-0.34724c-0.53504-0.53163-0.92633-0.71544-1.627-0.76433-0.838-0.0585-0.93577 0.0194-0.79055 0.62971 0.39993 1.6808 0.50143 3.5768 0.244 4.5578l-0.15162 0.57778h-0.43594c-0.7233 0-1.857 0.61684-2.6412 1.4371l-0.27646 0.28918 1.2192 1.2808-0.068 0.68064c-0.14294 1.4298-0.63989 2.78-1.3207 3.5882-0.4259 0.50565-0.73574 0.54185-0.95444 0.11152-0.15276-0.30058-0.15466-0.2945-0.0962 0.30664 0.0756 0.77797 0.44692 1.709 0.78001 1.956 0.14145 0.10489 0.54543 0.25908 0.89772 0.34265 0.86075 0.20418 1.2917 0.47128 1.8498 1.1465 0.45753 0.55353 0.46522 0.57449 0.32427 0.88296-0.0794 0.17378-0.15838 0.46104-0.17548 0.63835-0.0298 0.30899-0.0102 0.32588 0.47272 0.40683 1.1748 0.19691 3.9118 1.5825 4.5385 2.2976 0.20746 0.23673 0.52579 0.70732 0.7074 1.0458 0.41055 0.76513 0.72499 0.98468 1.4103 0.98468 0.42096 0 0.55256 0.0451 0.65075 0.22301 0.24758 0.44864 0.56701 0.28334 1.0769-0.55726 0.91486-1.5083 1.5081-1.4051 2.4187 0.42087 0.60336 1.2098 1.1448 1.6134 1.5744 1.1734 0.44818-0.459 1.0965-0.1483 1.6171 0.77499 0.12969 0.22999 0.26849 0.41779 0.30846 0.41734 0.04-4.2e-4 0.33201-0.41443 0.649-0.91995zm-8.0651-7.3268c-0.27097-0.0439-0.91392-0.30671-1.4288-0.58404-1.3874-0.74734-2.0744-1.6887-2.6544-3.6372-0.18702-0.62824-0.19432-0.77247-0.0926-1.8286 0.13778-1.4306 0.29277-1.8278 1.1219-2.875 0.36416-0.45997 0.77488-1.0019 0.91271-1.2042 0.26294-0.38605 0.96969-0.91443 1.2231-0.91443 0.0817 0 0.23247-0.105 0.33511-0.23334 0.36724-0.45922 0.51271-0.47546 0.82236-0.0918 0.26563 0.32911 0.30764 0.34495 0.60432 0.22791 0.43539-0.17176 0.76181-0.15807 1.3147 0.0551 0.36409 0.14038 0.52286 0.15325 0.70876 0.0574 0.19572-0.10092 0.26602-0.0881 0.38416 0.07 0.43448 0.58138 1.381 1.5138 2.0062 1.9762 0.44058 0.32589 0.45986 0.363 0.52258 1.0062 0.0358 0.36732 0.13481 1.0191 0.21999 1.4484 0.0852 0.42931 0.15565 1.0156 0.15659 1.303 1e-3 0.28733 0.0438 0.64763 0.0952 0.80067 0.0732 0.21793 0.0513 0.33895-0.1011 0.55821-0.10703 0.15398-0.27515 0.30889-0.37361 0.34425-0.0985 0.0354-0.30792 0.34429-0.46547 0.6865-0.42368 0.92024-1.1038 1.8206-1.7679 2.3403l-0.58783 0.46005-1.2317 0.0571c-0.67743 0.0314-1.4534 0.0212-1.7244-0.0227z"
            strokeWidth=".007338"
          />
        </g>
        <g>
          <ellipse
            cx="145.64"
            cy="44.627"
            rx="5.489"
            ry="5.7032"
            strokeWidth=".24531"
          />
          <ellipse
            cx="100.31"
            cy="76.258"
            rx="5.489"
            ry="5.7032"
            strokeWidth=".24531"
          />
          <ellipse
            cx="122.81"
            cy="119.08"
            rx="8.1342"
            ry="7.8696"
            strokeWidth=".35078"
          />
          <ellipse
            cx="158.53"
            cy="149.51"
            rx="8.2564"
            ry="8.5935"
            strokeWidth=".3693"
          />
          <ellipse
            cx="68.562"
            cy="47.033"
            rx="9.2196"
            ry="9.3148"
            strokeWidth=".4063"
          />
          <ellipse
            cx="64.595"
            cy="147.95"
            rx="5.489"
            ry="5.7032"
            strokeWidth=".24531"
          />
        </g>
      </svg>
    );
  };
}

interface ITakeDamageButtonSVGProps {
  x: number;
  y: number;
  width: number;
  height: number;

  onClick?(): void;
}

interface ITakeDamageButtonSVGState {}
