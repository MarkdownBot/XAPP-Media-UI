import * as React from 'react';

export interface HeaderProps {
  /* empty */
}

export interface HeaderState {
  /* empty */
}

export class Header extends React.PureComponent<HeaderProps, HeaderState> {
    handleLoad(){
        document.getElementById('appTitle').innerHTML = "XAPP Media Apps";
        document.getElementById('appDescription').innerHTML = "Connecting Consumers to Brands through Voice";
        document.getElementById('appImage').src = "https://pbs.twimg.com/profile_images/443049571162152960/ttdMY1Fv_400x400.png";
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }


      render() {
        return (
          <header>
              <tr>
                <td><img id="appImage" src="" className="rounded"></img></td>
                <td><h1 id="appTitle"></h1>
                <div id="appDescription"></div></td>
              </tr>
          </header>
        );
      }
    }
