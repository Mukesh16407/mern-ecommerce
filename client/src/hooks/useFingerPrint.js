import { useEffect, useState } from "react";

//Allows use of biometric authentication in native apps
export const useFingerPrint = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    if (!window.FingerPrint) {
      console.info("FingerPrint is not available in platform");
      setIsAvailable(false);
      return;
    }
    window.FingerPrint.isAvailable(
      (result) => {
        console.info("FingerPrint available", result);
        setIsAvailable(true);
      },
      (message) => {
        console.info("FingerPrint available", message);
        setIsAvailable(false);
      }
    );
  }, []);

  //Register secret
  const register = (
    secret,
    options = { desc: "Some biometric description" }
  ) => {
    const promise = new Promise((resolve, reject) => {
      function errorCallback(error) {
        return reject(error);
      }
      function successCallback() {
        return resolve();
      }
      window.FingerPrint.registerBiometricSecret(
        {
          description: options.desc,
          secret,
          invalidateOnEnrollment: true,
          disableBackup: true, //always disable on Android
        },
        successCallback,
        errorCallback
      );
    });
    return promise;
  };

  // show authentication dialogue and load secret
  const get = (options = { desc: "some biometruc description" }) => {
    const promise = new Promise((resolve, reject) => {
      function successCallback(secret) {
        return resolve(secret);
      }
      function errorCallback(error) {
        return reject(error);
      }
      window.FingerPrint.loadBiometricSecret(
        {
          description: options.desc,
          disableBackup: true, //always disable on Android
        },
        successCallback,
        errorCallback
      );
    });
    return promise;
  };
  return { isAvailable, register, get };
};
