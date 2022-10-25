import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import SuccessIcon from "../public/assets/images/tick-circle.svg";
import ErrorIcon from "../public/assets/images/close-circle.svg";
import WarningIcon from "../public/assets/images/danger.svg";
import NeutralIcon from "../public/assets/images/info-circle.svg";

export const AlertType = {
  success: {
    icon: SuccessIcon,
    type: "success",
    message: "Successful",
  },
  error: {
    icon: ErrorIcon,
    type: "error",
    message: "Error",
  },
  neutral: {
    icon: NeutralIcon,
    type: "neutral",
    message: "Neutral",
  },
  warning: {
    icon: WarningIcon,
    type: "warning",
    message: "Warning",
  },
};

const alertSubject = new Subject();
const defaultId = "default-alert";

// enable subscribing to alerts observable
const onAlert = (id = defaultId) => {
  return alertSubject.asObservable().pipe(filter((x) => x && x.id === id));
};

const defaultOptions = {
  autoClose: true,
  keepAfterRouteChange: true,
};

// convenience methods
const alertMethod = (method, message, alertOptions) => {
  const OPTIONS = alertOptions || defaultOptions;
  alert({
    ...OPTIONS,
    icon: AlertType[method]["icon"],
    type: method,
    message,
  });
};

// core alert method
const alert = (alert) => {
  alert.id = alert.id || defaultId;
  alert.autoClose = alert.autoClose === undefined ? true : alert.autoClose;
  alertSubject.next(alert);
};

// clear alerts
const clear = (id = defaultId) => {
  alertSubject.next({ id });
};

export const alertService = {
  onAlert,
  alertMethod,
  alert,
  clear,
};
