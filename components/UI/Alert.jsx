import React from "react";
import { useRouter } from "next/router";

import { alertService, AlertType } from "../../services";
import { AlertStyles } from "./AlertStyles";
import Image from "next/image";
import { v4 } from "uuid";

Alert.defaultProps = {
  id: "default-alert",
  fade: true,
};

function Alert({ id, fade }) {
  const mounted = React.useRef(false);
  const router = useRouter();
  const [alerts, setAlerts] = React.useState([]);

  const removeAlert = (alert) => {
    if (!mounted.current) return;

    if (fade) {
      // fade out alert
      setAlerts((alerts) =>
        alerts.map((x) =>
          x.itemId === alert.itemId ? { ...x, fade: false } : x
        )
      );

      // remove alert after faded out
      setTimeout(() => {
        setAlerts((alerts) => alerts.filter((x) => x.itemId !== alert.itemId));
      }, 250);
    } else {
      // remove alert
      setAlerts((alerts) => alerts.filter((x) => x.itemId !== alert.itemId));
    }
  };

  const omit = (arr, key) => {
    return arr.map((obj) => {
      const { [key]: omitted, ...rest } = obj;
      return rest;
    });
  };

  const cssClasses = (alert) => {
    if (!alert) return;

    const classes = ["alert"];

    const alertTypeClass = {
      [AlertType.success.type]: "alert-success",
      [AlertType.error.type]: "alert-danger",
      [AlertType.neutral.type]: "alert-neutral",
      [AlertType.warning.type]: "alert-warning",
    };

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push("fade");
    }

    return classes.join(" ");
  };

  React.useEffect(() => {
    mounted.current = true;

    // subscribe to new alert notifications
    const subscription = alertService.onAlert(id).subscribe((alert) => {
      // clear alerts when an empty alert is received
      if (!alert.message) {
        setAlerts((alerts) => {
          // filter out alerts without 'keepAfterRouteChange' flag
          const filteredAlerts = alerts.filter((x) => x.keepAfterRouteChange);

          // remove 'keepAfterRouteChange' flag on the rest
          return omit(filteredAlerts, "keepAfterRouteChange");
        });
      } else {
        // add alert to array with unique id
        alert.itemId = v4();
        setAlerts((alerts) => [...alerts, alert]);

        // auto close alert if required
        if (alert.autoClose) {
          setTimeout(() => removeAlert(alert), 3000);
        }
      }
    });

    // clear alerts on location change
    const clearAlerts = () => alertService.clear(id);
    router.events.on("routeChangeStart", clearAlerts);

    // clean up function that runs when the component unmounts
    return () => {
      mounted.current = false;

      // unsubscribe to avoid memory leaks
      subscription.unsubscribe();
      router.events.off("routeChangeStart", clearAlerts);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!alerts.length) return null;

  return (
    <AlertStyles>
      {alerts.map((alert, index) => (
        <div key={index} className={cssClasses(alert)}>
          <Image src={alert.icon} width={20} height={20} alt="alert-icon" />
          <span dangerouslySetInnerHTML={{ __html: alert.message }}></span>
        </div>
      ))}
    </AlertStyles>
  );
}

export default Alert;
