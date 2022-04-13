import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

import styles from './ApInvoiceDetails.module.scss';

export interface IApInvoiceDetailsProps {
  text: string;
}

const LOG_SOURCE: string = 'ApInvoiceDetails';

export default class ApInvoiceDetails extends React.Component<IApInvoiceDetailsProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: ApInvoiceDetails mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: ApInvoiceDetails unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.ApInvoiceDetails}>
        { this.props.text }
      </div>
    );
  }
}
