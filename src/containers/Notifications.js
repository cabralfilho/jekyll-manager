import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';

export class Notifications extends Component {

  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }

  componentWillReceiveProps(nextProps) {
    const { notification } = nextProps;
    this.notificationSystem.addNotification({
      title: notification.title,
      message: notification.message,
      level: notification.level,
      position: 'br',
      autoDismiss: 10
    });
  }

  render() {
    const style = {
      Containers: {
        DefaultStyle: {
          padding: 15,
          width: 360,
          textAlign: 'center'
        }
      },
      Title: {
        DefaultStyle: {
          fontSize: 21,
          color: '#fff'
        }
      },
      NotificationItem: {
        DefaultStyle: {
          margin: 0,
          padding: '9px 15px 15px',
          fontSize: 15,
          borderRadius: 0,
          transition: '0.5s ease-in-out'
        },
        success: {
          color: '#fff',
          backgroundColor: '#5ea400'
        },
        error: {
          color: '#fff',
          backgroundColor: '#ec3d3d'
        },
        warning: {
          color: '#fff',
          backgroundColor: '#ebad1a'
        },
        info: {
          color: '#fff',
          backgroundColor: '#369cc7'
        }
      },
      Dismiss: {
        DefaultStyle: {
          top: 7,
          right: 9,
          width: 25,
          height: 25,
          padding: 4,
          backgroundColor: 'transparent',
          border: '2px solid',
          opacity: '0.84'
        }
      }
    };
    return <NotificationSystem ref="notificationSystem" style={style} />;
  }
}

Notifications.propTypes = {
  notification: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  notification: state.notifications.notification
});

export default connect(mapStateToProps)(Notifications);
