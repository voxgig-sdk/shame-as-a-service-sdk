# ProjectName SDK exists test

import pytest
from shameasaservice_sdk import ShameAsAServiceSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ShameAsAServiceSDK.test(None, None)
        assert testsdk is not None
