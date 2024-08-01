import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressAddress extends Schema.Component {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'Address';
    icon: 'house';
  };
  attributes: {
    address_line_1: Attribute.Text;
    addresss_line_2: Attribute.Text;
    city: Attribute.String;
    state: Attribute.String;
    country: Attribute.String;
    zip: Attribute.String;
  };
}

export interface DeviceDeviceInfo extends Schema.Component {
  collectionName: 'components_device_device_infos';
  info: {
    displayName: 'Device Info';
    icon: 'user';
  };
  attributes: {
    device_id: Attribute.String;
    device_type: Attribute.String;
  };
}

export interface NotificationsNotificationPreferences extends Schema.Component {
  collectionName: 'components_notifications_notification_preferences';
  info: {
    displayName: 'notification preferences';
    icon: 'bell';
  };
  attributes: {
    email_notification: Attribute.Boolean;
    sms_notification: Attribute.Boolean;
    push_notification: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.address': AddressAddress;
      'device.device-info': DeviceDeviceInfo;
      'notifications.notification-preferences': NotificationsNotificationPreferences;
    }
  }
}
