# ShameAsAService SDK feature factory

from shameasaservice_sdk.feature.base_feature import ShameAsAServiceBaseFeature
from shameasaservice_sdk.feature.test_feature import ShameAsAServiceTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ShameAsAServiceBaseFeature(),
        "test": lambda: ShameAsAServiceTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
