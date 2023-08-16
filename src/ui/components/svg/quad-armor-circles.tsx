import React from "react";
import { BattleMech } from "../../../classes/battlemech";
import DamageCircleSVG from "./damage-circle-svg";
import TakeDamageButtonSVG from "./take-damage-button";

export default class QuadArmorCircles extends React.Component<
  IQuadArmorCirclesProps,
  IQuadArmorCirclesState
> {
  armorBoxTop = 0;
  armorBoxLeft = 0;
  armorBoxWidth = 0;

  constructor(props: IQuadArmorCirclesProps) {
    super(props);

    this.armorBoxWidth = this.props.armorBoxWidth;
    this.armorBoxLeft = this.props.armorBoxLeft;
    this.armorBoxTop = this.props.armorBoxTop;
  }

  toggleArmorBubble = (shortLoc: string, indexNumnber: number): void => {
    if (this.props.inPlay) {
      this.props.mechData.toggleArmorBubble(shortLoc, indexNumnber);
      if (this.props.onChange) {
        this.props.onChange(this.props.mechData);
      }
    }
  };
  render = (): JSX.Element => {
    return (
      <>
        {this.props.inPlay &&
        (this.props.currentPhase === 2 || this.props.currentPhase === 3) ? (
          <TakeDamageButtonSVG
            x={this.armorBoxLeft + 25}
            y={this.armorBoxTop + 325}
            height={125}
            width={125}
            onClick={this.props.openTakeDamageDialog}
          />
        ) : null}
        {/* Head Armor */}
        {this.props.mechData.getArmorAllocation().head > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("hd", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 35}
              yLoc={this.armorBoxTop + 200}
              radius={15}
              inPlay={this.props.inPlay}
              clickLocation="hd"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().head > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("hd", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 0}
              yLoc={this.armorBoxTop + 200}
              radius={15}
              inPlay={this.props.inPlay}
              clickLocation="hd"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().head > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("hd", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 35}
              yLoc={this.armorBoxTop + 200}
              radius={15}
              inPlay={this.props.inPlay}
              clickLocation="hd"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().head > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("hd", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 35}
              yLoc={this.armorBoxTop + 240}
              radius={15}
              inPlay={this.props.inPlay}
              clickLocation="hd"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().head > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("hd", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 0}
              yLoc={this.armorBoxTop + 240}
              radius={15}
              inPlay={this.props.inPlay}
              clickLocation="hd"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().head > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("hd", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 35}
              yLoc={this.armorBoxTop + 240}
              radius={15}
              inPlay={this.props.inPlay}
              clickLocation="hd"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().head > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("hd", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 35}
              yLoc={this.armorBoxTop + 280}
              radius={15}
              inPlay={this.props.inPlay}
              clickLocation="hd"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().head > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("hd", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 0}
              yLoc={this.armorBoxTop + 280}
              radius={15}
              inPlay={this.props.inPlay}
              clickLocation="hd"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().head > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("hd", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 35}
              yLoc={this.armorBoxTop + 280}
              radius={15}
              inPlay={this.props.inPlay}
              clickLocation="hd"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {/* Center Torso Armor */}
        {this.props.mechData.getArmorAllocation().centerTorso > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 65}
              yLoc={this.armorBoxTop + 325}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 37}
              yLoc={this.armorBoxTop + 325}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 13}
              yLoc={this.armorBoxTop + 325}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 13}
              yLoc={this.armorBoxTop + 325}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 37}
              yLoc={this.armorBoxTop + 325}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 65}
              yLoc={this.armorBoxTop + 325}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorso > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 65}
              yLoc={this.armorBoxTop + 350}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 37}
              yLoc={this.armorBoxTop + 350}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 13}
              yLoc={this.armorBoxTop + 350}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 9 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 9)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 13}
              yLoc={this.armorBoxTop + 350}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={9}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 10 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 10)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 37}
              yLoc={this.armorBoxTop + 350}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={10}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 11 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 11)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 65}
              yLoc={this.armorBoxTop + 350}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={11}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorso > 12 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 12)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 65}
              yLoc={this.armorBoxTop + 375}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={12}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 13 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 13)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 37}
              yLoc={this.armorBoxTop + 375}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={13}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 14 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 14)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 13}
              yLoc={this.armorBoxTop + 375}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={14}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 15 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 15)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 13}
              yLoc={this.armorBoxTop + 375}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={15}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 16 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 16)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 37}
              yLoc={this.armorBoxTop + 375}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={16}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 17 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 17)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 65}
              yLoc={this.armorBoxTop + 375}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorso > 18 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 18)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 65}
              yLoc={this.armorBoxTop + 400}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={18}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 19 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 19)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 37}
              yLoc={this.armorBoxTop + 400}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 20 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 20)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 13}
              yLoc={this.armorBoxTop + 400}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={20}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 21 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 21)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 13}
              yLoc={this.armorBoxTop + 400}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={21}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 22 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 22)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 37}
              yLoc={this.armorBoxTop + 400}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={22}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 23 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 23)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 65}
              yLoc={this.armorBoxTop + 400}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={23}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorso > 24 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 24)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 65}
              yLoc={this.armorBoxTop + 425}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={24}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 25 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 25)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 37}
              yLoc={this.armorBoxTop + 425}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={25}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 26 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 26)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 13}
              yLoc={this.armorBoxTop + 425}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={26}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 27 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 27)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 13}
              yLoc={this.armorBoxTop + 425}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={27}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 28 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 28)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 37}
              yLoc={this.armorBoxTop + 425}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={28}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 29 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 29)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 65}
              yLoc={this.armorBoxTop + 425}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={29}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorso > 30 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 30)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 65}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={30}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 31 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 31)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 37}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={31}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 32 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 32)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 13}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={32}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 33 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 33)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 13}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={33}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 34 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 34)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 37}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={34}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 35 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 35)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 65}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={35}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorso > 36 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 36)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 50}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={36}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 37 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 37)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 25}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={37}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 38 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 38)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 0}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={38}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 39 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 39)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 25}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 40 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 40)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 50}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={40}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorso > 41 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 41)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 50}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={41}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 42 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 42)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 25}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={42}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 43 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 43)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 0}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={43}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 44 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 44)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 25}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={44}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 45 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 45)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 50}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={45}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorso > 46 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 46)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 50}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={46}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 47 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 47)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 25}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={47}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 48 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 48)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 0}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={48}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 49 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 49)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 25}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={49}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 50 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 50)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 50}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={50}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorso > 51 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 51)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 50}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={50}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 52 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 52)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 25}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={52}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 53 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 53)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 0}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={53}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 54 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 54)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 25}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={54}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorso > 55 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ct", 55)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 50}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ct"
              clickIndex={55}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {/* Left Torso Armor */}
        {this.props.mechData.getArmorAllocation().leftTorso > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 110}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 135}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 160}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 185}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 210}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 235}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorso > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 110}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 135}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 160}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 9 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 9)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 185}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={9}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 10 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 10)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 210}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={10}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 11 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 11)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 235}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={11}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorso > 12 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 12)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 110}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={12}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 13 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 13)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 135}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={13}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 14 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 14)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 160}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={14}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 15 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 15)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 185}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={15}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 16 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 16)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 210}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={16}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 17 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 17)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 235}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorso > 18 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 18)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 110}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={18}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 19 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 19)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 135}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 20 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 20)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 160}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={20}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 21 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 21)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 185}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={21}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 22 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 22)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 210}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={22}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 23 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 23)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 235}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={23}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorso > 24 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 24)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 110}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={24}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 25 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 25)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 135}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={25}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 26 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 26)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 160}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={26}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 27 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 27)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 185}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={27}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 28 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 28)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 210}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={28}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 29 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 29)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 235}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={29}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorso > 30 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 30)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 110}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={30}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 31 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 31)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 135}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={31}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 32 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 32)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 160}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={32}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 33 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 33)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 185}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={33}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 34 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 34)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 210}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={34}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 35 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 35)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 235}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={35}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorso > 36 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 36)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 110}
              yLoc={this.armorBoxTop + 330}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={36}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 37 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 37)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 135}
              yLoc={this.armorBoxTop + 330}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={37}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 38 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 38)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 160}
              yLoc={this.armorBoxTop + 330}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={38}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 39 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 39)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 185}
              yLoc={this.armorBoxTop + 330}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={39}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 40 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 40)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 210}
              yLoc={this.armorBoxTop + 330}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={40}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorso > 41 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 41)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 110}
              yLoc={this.armorBoxTop + 355}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={41}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 42 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 42)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 135}
              yLoc={this.armorBoxTop + 355}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={42}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 43 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 43)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 160}
              yLoc={this.armorBoxTop + 355}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={43}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 44 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 44)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 185}
              yLoc={this.armorBoxTop + 355}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={44}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorso > 45 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("lt", 45)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 210}
              yLoc={this.armorBoxTop + 355}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="lt"
              clickIndex={45}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {/* Right Torso Armor */}
        {this.props.mechData.getArmorAllocation().rightTorso > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 110}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 135}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 160}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 185}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 210}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 235}
              yLoc={this.armorBoxTop + 180}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorso > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 110}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 135}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 160}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 9 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 9)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 185}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={9}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 10 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 10)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 210}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={10}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 11 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 11)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 235}
              yLoc={this.armorBoxTop + 205}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={11}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorso > 12 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 12)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 110}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={12}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 13 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 13)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 135}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={13}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 14 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 14)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 160}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={14}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 15 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 15)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 185}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={15}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 16 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 16)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 210}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={16}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 17 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 17)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 235}
              yLoc={this.armorBoxTop + 230}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorso > 18 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 18)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 110}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={18}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 19 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 19)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 135}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 20 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 20)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 160}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={20}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 21 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 21)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 185}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={21}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 22 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 22)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 210}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={22}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 23 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 23)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 235}
              yLoc={this.armorBoxTop + 255}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={23}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorso > 24 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 24)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 110}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={24}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 25 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 25)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 135}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={25}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 26 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 26)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 160}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={26}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 27 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 27)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 185}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={27}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 28 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 28)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 210}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={28}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 29 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 29)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 235}
              yLoc={this.armorBoxTop + 280}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={29}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorso > 30 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 30)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 110}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={30}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 31 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 31)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 135}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={31}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 32 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 32)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 160}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={32}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 33 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 33)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 185}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={33}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 34 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 34)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 210}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={34}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 35 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 35)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 235}
              yLoc={this.armorBoxTop + 305}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={35}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorso > 36 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 36)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 110}
              yLoc={this.armorBoxTop + 330}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={36}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 37 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 37)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 135}
              yLoc={this.armorBoxTop + 330}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={37}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 38 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 38)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 160}
              yLoc={this.armorBoxTop + 330}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={38}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 39 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 39)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 185}
              yLoc={this.armorBoxTop + 330}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={39}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 40 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 40)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 210}
              yLoc={this.armorBoxTop + 330}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={40}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorso > 41 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 41)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 110}
              yLoc={this.armorBoxTop + 355}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={41}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 42 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 42)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 135}
              yLoc={this.armorBoxTop + 355}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={42}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 43 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 43)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 160}
              yLoc={this.armorBoxTop + 355}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={43}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 44 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 44)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 185}
              yLoc={this.armorBoxTop + 355}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={44}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorso > 45 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rt", 45)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 210}
              yLoc={this.armorBoxTop + 355}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rt"
              clickIndex={45}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {/* Left Front Leg Armor */}
        {this.props.mechData.getArmorAllocation().leftArm > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 210}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 212}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 214}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 216}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 218}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftArm > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 220}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 222}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 224}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 226}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 9 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 9)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 228}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={9}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftArm > 10 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 10)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 230}
              yLoc={this.armorBoxTop + 720}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={10}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 11 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 11)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 232}
              yLoc={this.armorBoxTop + 745}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={11}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 12 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 12)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 234}
              yLoc={this.armorBoxTop + 770}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={12}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 13 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 13)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 236}
              yLoc={this.armorBoxTop + 795}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={13}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 14 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 14)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 238}
              yLoc={this.armorBoxTop + 820}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={14}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftArm > 15 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 15)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 185}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={15}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 16 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 16)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 187}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={16}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 17 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 17)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 189}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 18 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 18)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 191}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={18}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 19 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 19)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 193}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftArm > 20 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 20)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 195}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={20}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 21 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 21)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 197}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={21}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 22 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 22)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 199}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={22}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 23 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 23)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 201}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={23}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 24 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 24)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 203}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={24}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftArm > 25 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 25)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 205}
              yLoc={this.armorBoxTop + 720}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={25}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 26 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 26)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 207}
              yLoc={this.armorBoxTop + 745}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={26}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 27 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 27)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 209}
              yLoc={this.armorBoxTop + 770}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 28 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 28)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 211}
              yLoc={this.armorBoxTop + 795}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={28}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 29 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 29)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 213}
              yLoc={this.armorBoxTop + 820}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={29}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftArm > 30 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 30)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 160}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={30}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 31 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 31)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 162}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={31}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 32 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 32)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 164}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={32}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 33 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 33)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 166}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={33}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 34 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 34)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 168}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={34}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftArm > 35 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 35)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 170}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={35}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 36 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 36)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 172}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={36}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 37 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 37)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 174}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={37}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 38 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 38)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 176}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={38}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 39 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 39)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 178}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={39}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftArm > 40 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 40)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 180}
              yLoc={this.armorBoxTop + 720}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={40}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 41 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 41)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 182}
              yLoc={this.armorBoxTop + 745}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={41}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 42 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 42)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 184}
              yLoc={this.armorBoxTop + 770}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={42}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 43 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 43)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 186}
              yLoc={this.armorBoxTop + 795}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={43}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftArm > 44 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("la", 44)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 188}
              yLoc={this.armorBoxTop + 820}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="la"
              clickIndex={44}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {/* Right Front Leg Armor */}
        {this.props.mechData.getArmorAllocation().rightArm > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 210}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 212}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 214}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 216}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 218}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightArm > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 220}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 222}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 224}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 226}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 9 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 9)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 228}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={9}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightArm > 10 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 10)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 230}
              yLoc={this.armorBoxTop + 720}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={10}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 11 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 11)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 232}
              yLoc={this.armorBoxTop + 745}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={11}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 12 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 12)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 234}
              yLoc={this.armorBoxTop + 770}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={12}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 13 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 13)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 236}
              yLoc={this.armorBoxTop + 795}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={13}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 14 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 14)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 238}
              yLoc={this.armorBoxTop + 820}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={14}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightArm > 15 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 15)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 185}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={15}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 16 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 16)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 187}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={16}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 17 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 17)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 189}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 18 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 18)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 191}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={18}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 19 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 19)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 193}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightArm > 20 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 20)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 195}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={20}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 21 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 21)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 197}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={21}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 22 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 22)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 199}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={22}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 23 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 23)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 201}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={23}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 24 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 24)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 203}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={24}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightArm > 25 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 25)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 205}
              yLoc={this.armorBoxTop + 720}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={25}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 26 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 26)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 207}
              yLoc={this.armorBoxTop + 745}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={26}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 27 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 27)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 209}
              yLoc={this.armorBoxTop + 770}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 28 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 28)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 211}
              yLoc={this.armorBoxTop + 795}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={28}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 29 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 29)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 213}
              yLoc={this.armorBoxTop + 820}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={29}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightArm > 30 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 30)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 160}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={30}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 31 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 31)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 162}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={31}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 32 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 32)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 164}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={32}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 33 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 33)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 166}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={33}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 34 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 34)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 168}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={34}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightArm > 35 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 35)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 170}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={35}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 36 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 36)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 172}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={36}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 37 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 37)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 174}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={37}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 38 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 38)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 176}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={38}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 39 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 39)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 178}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={39}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightArm > 40 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 40)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 180}
              yLoc={this.armorBoxTop + 720}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={40}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 41 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 41)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 182}
              yLoc={this.armorBoxTop + 745}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={41}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 42 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 42)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 184}
              yLoc={this.armorBoxTop + 770}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={42}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 43 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 43)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 186}
              yLoc={this.armorBoxTop + 795}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={43}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightArm > 44 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ra", 44)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 188}
              yLoc={this.armorBoxTop + 820}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ra"
              clickIndex={44}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {/* Left Rear Leg Armor */}
        {this.props.mechData.getArmorAllocation().leftLeg > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 105}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 106}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 107}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 108}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 109}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftLeg > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 116}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 117}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 118}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 119}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 9 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 9)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 120}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={9}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftLeg > 10 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 10)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 121}
              yLoc={this.armorBoxTop + 715}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={10}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 11 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 11)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 122}
              yLoc={this.armorBoxTop + 740}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={11}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 12 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 12)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 123}
              yLoc={this.armorBoxTop + 765}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={12}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 13 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 13)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 124}
              yLoc={this.armorBoxTop + 790}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={13}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 14 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 14)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 125}
              yLoc={this.armorBoxTop + 815}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={14}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftLeg > 15 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 15)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 91}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={15}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 16 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 16)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 92}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={16}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 17 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 17)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 93}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 18 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 18)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 94}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={18}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 19 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 19)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 95}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftLeg > 20 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 20)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 96}
              yLoc={this.armorBoxTop + 715}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={20}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 21 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 21)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 97}
              yLoc={this.armorBoxTop + 740}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={21}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 22 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 22)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 98}
              yLoc={this.armorBoxTop + 765}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={22}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 23 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 23)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 99}
              yLoc={this.armorBoxTop + 790}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={23}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 24 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 24)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 100}
              yLoc={this.armorBoxTop + 815}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={24}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftLeg > 25 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 25)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 66}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={25}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 26 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 26)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 67}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={26}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 27 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 27)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 68}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={27}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 28 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 28)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 69}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={28}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 29 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 29)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 70}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={29}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftLeg > 30 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 30)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 71}
              yLoc={this.armorBoxTop + 715}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={30}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 31 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 31)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 72}
              yLoc={this.armorBoxTop + 740}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={31}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 32 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 32)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 73}
              yLoc={this.armorBoxTop + 765}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={32}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 33 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 33)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 74}
              yLoc={this.armorBoxTop + 790}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={33}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 34 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 34)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 75}
              yLoc={this.armorBoxTop + 815}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={34}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftLeg > 35 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 35)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 120}
              yLoc={this.armorBoxTop + 850}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={35}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 36 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 36)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 95}
              yLoc={this.armorBoxTop + 850}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={36}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 37 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 37)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 70}
              yLoc={this.armorBoxTop + 850}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={37}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftLeg > 38 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 38)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 145}
              yLoc={this.armorBoxTop + 875}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={38}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 39 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 39)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 120}
              yLoc={this.armorBoxTop + 875}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={39}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 40 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 40)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 95}
              yLoc={this.armorBoxTop + 875}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={40}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 41 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 41)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 70}
              yLoc={this.armorBoxTop + 875}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={41}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 42 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 42)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 45}
              yLoc={this.armorBoxTop + 875}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={42}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftLeg > 43 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 43)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 95}
              yLoc={this.armorBoxTop + 900}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={43}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftLeg > 44 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ll", 44)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 70}
              yLoc={this.armorBoxTop + 900}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ll"
              clickIndex={44}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {/* Right Rear Leg Armor */}
        {this.props.mechData.getArmorAllocation().rightLeg > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 105}
              yLoc={this.armorBoxTop + 450}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 106}
              yLoc={this.armorBoxTop + 475}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 107}
              yLoc={this.armorBoxTop + 500}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 108}
              yLoc={this.armorBoxTop + 525}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 109}
              yLoc={this.armorBoxTop + 550}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightLeg > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 116}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 117}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 118}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 119}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 9 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 9)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 120}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={9}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightLeg > 10 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 10)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 121}
              yLoc={this.armorBoxTop + 715}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={10}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 11 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 11)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 122}
              yLoc={this.armorBoxTop + 740}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={11}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 12 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 12)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 123}
              yLoc={this.armorBoxTop + 765}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={12}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 13 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 13)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 124}
              yLoc={this.armorBoxTop + 790}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={13}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 14 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 14)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 125}
              yLoc={this.armorBoxTop + 815}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={14}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightLeg > 15 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 15)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 91}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={15}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 16 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 16)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 92}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={16}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 17 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 17)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 93}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 18 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 18)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 94}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={18}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 19 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 19)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 95}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightLeg > 20 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 20)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 96}
              yLoc={this.armorBoxTop + 715}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={20}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 21 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 21)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 97}
              yLoc={this.armorBoxTop + 740}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={21}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 22 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 22)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 98}
              yLoc={this.armorBoxTop + 765}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={22}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 23 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 23)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 99}
              yLoc={this.armorBoxTop + 790}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={23}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 24 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 24)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 100}
              yLoc={this.armorBoxTop + 815}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={24}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightLeg > 25 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 25)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 66}
              yLoc={this.armorBoxTop + 585}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={25}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 26 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 26)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 67}
              yLoc={this.armorBoxTop + 610}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={26}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 27 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 27)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 68}
              yLoc={this.armorBoxTop + 635}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={27}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 28 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 28)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 69}
              yLoc={this.armorBoxTop + 660}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={28}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 29 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 29)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 70}
              yLoc={this.armorBoxTop + 685}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={29}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightLeg > 30 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 30)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 71}
              yLoc={this.armorBoxTop + 715}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={30}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 31 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 31)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 72}
              yLoc={this.armorBoxTop + 740}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={31}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 32 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 32)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 73}
              yLoc={this.armorBoxTop + 765}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={32}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 33 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 33)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 74}
              yLoc={this.armorBoxTop + 790}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={33}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 34 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 34)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 75}
              yLoc={this.armorBoxTop + 815}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={34}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightLeg > 35 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 35)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 120}
              yLoc={this.armorBoxTop + 850}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={35}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 36 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 36)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 95}
              yLoc={this.armorBoxTop + 850}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={36}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 37 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 37)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 70}
              yLoc={this.armorBoxTop + 850}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={37}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightLeg > 38 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 38)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 145}
              yLoc={this.armorBoxTop + 875}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={38}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 39 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 39)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 120}
              yLoc={this.armorBoxTop + 875}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={39}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 40 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 40)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 95}
              yLoc={this.armorBoxTop + 875}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={40}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 41 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 41)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 70}
              yLoc={this.armorBoxTop + 875}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={41}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 42 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 42)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 45}
              yLoc={this.armorBoxTop + 875}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={42}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightLeg > 43 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 43)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 95}
              yLoc={this.armorBoxTop + 900}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={43}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightLeg > 44 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rl", 44)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 70}
              yLoc={this.armorBoxTop + 900}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rl"
              clickIndex={44}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {/* Center Torso Rear Armor */}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 35}
              yLoc={this.armorBoxTop + 1005}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 12}
              yLoc={this.armorBoxTop + 1005}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 12}
              yLoc={this.armorBoxTop + 1005}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 35}
              yLoc={this.armorBoxTop + 1005}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorsoRear > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 35}
              yLoc={this.armorBoxTop + 1030}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 12}
              yLoc={this.armorBoxTop + 1030}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 12}
              yLoc={this.armorBoxTop + 1030}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 35}
              yLoc={this.armorBoxTop + 1030}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorsoRear > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 35}
              yLoc={this.armorBoxTop + 1055}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 9 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 9)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 12}
              yLoc={this.armorBoxTop + 1055}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={9}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 10 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 10)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 12}
              yLoc={this.armorBoxTop + 1055}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={10}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 11 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 11)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 35}
              yLoc={this.armorBoxTop + 1055}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={11}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorsoRear > 12 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 12)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 35}
              yLoc={this.armorBoxTop + 1080}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={12}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 13 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 13)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 12}
              yLoc={this.armorBoxTop + 1080}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={13}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 14 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 14)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 12}
              yLoc={this.armorBoxTop + 1080}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={14}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 15 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 15)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 35}
              yLoc={this.armorBoxTop + 1080}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={15}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorsoRear > 16 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 16)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 35}
              yLoc={this.armorBoxTop + 1105}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={16}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 17 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 17)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 12}
              yLoc={this.armorBoxTop + 1105}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 18 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 18)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 12}
              yLoc={this.armorBoxTop + 1105}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={18}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 19 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 19)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 35}
              yLoc={this.armorBoxTop + 1105}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorsoRear > 20 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 20)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 35}
              yLoc={this.armorBoxTop + 1130}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={20}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 21 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 21)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 12}
              yLoc={this.armorBoxTop + 1130}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={21}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 22 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 22)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 12}
              yLoc={this.armorBoxTop + 1130}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={22}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 23 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 23)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 35}
              yLoc={this.armorBoxTop + 1130}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={23}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().centerTorsoRear > 24 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 24)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 35}
              yLoc={this.armorBoxTop + 1155}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={24}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 25 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 25)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 12}
              yLoc={this.armorBoxTop + 1155}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={25}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 26 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 26)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 12}
              yLoc={this.armorBoxTop + 1155}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={26}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().centerTorsoRear > 27 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ctr", 27)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 35}
              yLoc={this.armorBoxTop + 1155}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ctr"
              clickIndex={27}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {/* Right Torso Rear Armor */}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 100}
              yLoc={this.armorBoxTop + 1015}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 75}
              yLoc={this.armorBoxTop + 1015}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorsoRear > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 125}
              yLoc={this.armorBoxTop + 1040}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 100}
              yLoc={this.armorBoxTop + 1040}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 75}
              yLoc={this.armorBoxTop + 1040}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorsoRear > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 150}
              yLoc={this.armorBoxTop + 1065}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 125}
              yLoc={this.armorBoxTop + 1065}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 100}
              yLoc={this.armorBoxTop + 1065}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 75}
              yLoc={this.armorBoxTop + 1065}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorsoRear > 9 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 9)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 150}
              yLoc={this.armorBoxTop + 1090}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={9}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 10 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 10)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 125}
              yLoc={this.armorBoxTop + 1090}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={10}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 11 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 11)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 100}
              yLoc={this.armorBoxTop + 1090}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={11}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 12 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 12)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 75}
              yLoc={this.armorBoxTop + 1090}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={12}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorsoRear > 13 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 13)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 150}
              yLoc={this.armorBoxTop + 1115}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={13}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 14 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 14)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 125}
              yLoc={this.armorBoxTop + 1115}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={14}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 15 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 15)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 100}
              yLoc={this.armorBoxTop + 1115}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={15}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 16 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 16)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 75}
              yLoc={this.armorBoxTop + 1115}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={16}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorsoRear > 17 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 17)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 125}
              yLoc={this.armorBoxTop + 1140}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 18 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 18)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 100}
              yLoc={this.armorBoxTop + 1140}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={18}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 19 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 19)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 75}
              yLoc={this.armorBoxTop + 1140}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().rightTorsoRear > 20 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 20)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 125}
              yLoc={this.armorBoxTop + 1165}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={20}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 21 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 21)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 100}
              yLoc={this.armorBoxTop + 1165}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={21}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().rightTorsoRear > 22 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("rtr", 22)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 - 75}
              yLoc={this.armorBoxTop + 1165}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="rtr"
              clickIndex={22}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {/* TODO Left Torso Rear Armor */}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 0 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 0)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 100}
              yLoc={this.armorBoxTop + 1015}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={0}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 1 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 1)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 75}
              yLoc={this.armorBoxTop + 1015}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={1}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorsoRear > 2 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 2)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 125}
              yLoc={this.armorBoxTop + 1040}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={2}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 3 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 3)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 100}
              yLoc={this.armorBoxTop + 1040}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={3}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 4 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 4)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 75}
              yLoc={this.armorBoxTop + 1040}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={4}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorsoRear > 5 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 5)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 150}
              yLoc={this.armorBoxTop + 1065}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={5}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 6 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 6)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 125}
              yLoc={this.armorBoxTop + 1065}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={6}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 7 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 7)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 100}
              yLoc={this.armorBoxTop + 1065}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={7}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 8 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 8)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 75}
              yLoc={this.armorBoxTop + 1065}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={8}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorsoRear > 9 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 9)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 150}
              yLoc={this.armorBoxTop + 1090}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={9}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 10 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 10)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 125}
              yLoc={this.armorBoxTop + 1090}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={10}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 11 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 11)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 100}
              yLoc={this.armorBoxTop + 1090}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={11}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 12 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 12)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 75}
              yLoc={this.armorBoxTop + 1090}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={12}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorsoRear > 13 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 13)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 150}
              yLoc={this.armorBoxTop + 1115}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={13}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 14 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 14)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 125}
              yLoc={this.armorBoxTop + 1115}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={14}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 15 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 15)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 100}
              yLoc={this.armorBoxTop + 1115}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={15}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 16 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 16)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 75}
              yLoc={this.armorBoxTop + 1115}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={16}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorsoRear > 17 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 17)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 125}
              yLoc={this.armorBoxTop + 1140}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={17}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 18 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 18)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 100}
              yLoc={this.armorBoxTop + 1140}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={18}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 19 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 19)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 75}
              yLoc={this.armorBoxTop + 1140}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={19}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}

        {this.props.mechData.getArmorAllocation().leftTorsoRear > 20 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 20)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 125}
              yLoc={this.armorBoxTop + 1165}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={20}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 21 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 21)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 100}
              yLoc={this.armorBoxTop + 1165}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={21}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
        {this.props.mechData.getArmorAllocation().leftTorsoRear > 22 ? (
          <>
            <DamageCircleSVG
              isFilled={this.props.mechData.armorDamaged("ltr", 22)}
              xLoc={this.armorBoxLeft + this.armorBoxWidth / 2 + 75}
              yLoc={this.armorBoxTop + 1165}
              radius={13}
              inPlay={this.props.inPlay}
              clickLocation="ltr"
              clickIndex={22}
              clickFunction={this.toggleArmorBubble}
            />
          </>
        ) : (
          <></>
        )}
      </>
    );
  };
}

interface IQuadArmorCirclesProps {
  bgColor?: string;
  strokeColor?: string;

  mechData: BattleMech;
  inPlay?: boolean;
  currentPhase?: number;

  armorBoxTop: number;
  armorBoxLeft: number;
  armorBoxWidth: number;
  onChange?(mech: BattleMech): void;
  openTakeDamageDialog?(): void;
}

interface IQuadArmorCirclesState {}
