# ShameAsAService SDK feature factory

from shameasaservice_sdk.feature.base_feature import ShameAsAServiceBaseFeature
from shameasaservice_sdk.feature.test_feature import ShameAsAServiceTestFeature


_FEATURES = {
    "base": lambda: ShameAsAServiceBaseFeature(),
    "test": lambda: ShameAsAServiceTestFeature(),
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
