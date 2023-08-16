import React from 'react';
import { Link } from 'react-router-dom';
import { IAppGlobals } from '../../app-router';
import TextSection from '../../components/text-section';
import UIPage from '../../components/ui-page';
import { MdTableView } from "react-icons/md";

export default class AlphaStrikeHome extends React.Component<IAlphaStrikeHomeProps, IAlphaStrikeHomeState> {
    constructor(props: IAlphaStrikeHomeProps) {
        super(props);
        this.state = {
            updated: false,
        }

        this.props.appGlobals.makeDocumentTitle("AlphaStrikeHome");
    }

    render = (): JSX.Element => {
      return (
        <UIPage current="alpha-strike-home" appGlobals={this.props.appGlobals}>

          <TextSection
            label="Alpha Strike"
          >
              <div className="icon-links">
                <Link  to={`${import.meta.env.BASE_URL}/alpha-strike/roster`}>
                  <MdTableView />
                  Alpha Strike Roster
                </Link>
              </div>
           </TextSection>

        </UIPage>
      );
    }
}

interface IAlphaStrikeHomeProps {
  appGlobals: IAppGlobals;
}

interface IAlphaStrikeHomeState {
    updated: boolean;

}