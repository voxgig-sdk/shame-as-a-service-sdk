# ShameAsAService SDK feature factory

from shameasaservice_sdk.feature.base_feature import ShameAsAServiceBaseFeature
from shameasaservice_sdk.feature.ratelimit_feature import ShameAsAServiceRatelimitFeature
from shameasaservice_sdk.feature.retry_feature import ShameAsAServiceRetryFeature
from shameasaservice_sdk.feature.test_feature import ShameAsAServiceTestFeature
from shameasaservice_sdk.feature.timeout_feature import ShameAsAServiceTimeoutFeature


_FEATURES = {
    "base": lambda: ShameAsAServiceBaseFeature(),
    "ratelimit": lambda: ShameAsAServiceRatelimitFeature(),
    "retry": lambda: ShameAsAServiceRetryFeature(),
    "test": lambda: ShameAsAServiceTestFeature(),
    "timeout": lambda: ShameAsAServiceTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
