/**
 * errorCodes.tsx
 */

export enum ErrorCodes {
    // CLIENT ERRORS
    NetworkError = -1,

    // SERVER ERRORS
    NoError = 0,
    InternalServerError = 1,
    MissingParameter = 2,
    BillingRequired = 3,
    AccessDenied = 4,
    InvalidUsernameOrPassword = 5,
    InvalidSubscriber = 6,
    SubscriptionAlreadyExists = 7,
    SubscriptionAlreadyExistsWithAnotherService = 8,
    SubscriptionRequired = 9,
    DeactivatedSubscriber = 10,
    SubscriptionExpired = 11,
    ActivationCodeRequired = 12,
    ActivationRequired = 13,
    DiscontinuedApplicationVersion = 14,
    DatabaseConnectionFailed = 15,
    IdentificationServiceConnectionFailed = 16,
    InvalidToken = 17,
    SessionExpired = 18,
    IntegrationServiceError = 19,
    IdleSubscriber = 20,
    SendMailFailed = 21,
    SendSMSFailed = 22,
    InvalidParameterData = 23,
    MissingMasterDataSettings = 24,
    InvalidOperation = 25,
    InvalidTerminalCode = 26,
    InvalidServiceCode = 27,
    InactiveService = 28,
    InvalidServiceId = 29,
    UnSupportedPlatform = 30,
    SessionInvalidated = 31,
    ActivationCodeFailed = 32,
    RegistrationFailure = 33,
    ResendVerificationCodeTimeRestriction = 34,
    NoMatchingData = 68678
}
