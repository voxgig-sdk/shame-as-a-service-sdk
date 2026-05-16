# ShameAsAService SDK utility: make_context

from core.context import ShameAsAServiceContext


def make_context_util(ctxmap, basectx):
    return ShameAsAServiceContext(ctxmap, basectx)
