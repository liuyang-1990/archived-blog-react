import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import routers from './config/router.config';
import Layouts from './layouts/layout';

class App extends React.Component<any, any>{

  render() {
    return (
      <Router>
        <ConfigProvider locale={zh_CN}>
          <Switch>
            <Layouts>
              {routers.map((r, key) => (
                <Route
                  // component={r.component}
                  exact={!!r.exact}
                  key={key}
                  path={r.path}
                />
              ))}
            </Layouts>

          </Switch>
        </ConfigProvider>
      </Router>
    )
  }
}

export default App;