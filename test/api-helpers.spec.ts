import {URLSearchParams} from '@angular/http';
import {ApiHelpers} from '../src/api-helpers';

import {
  expect,
  it,
  describe
} from '@angular/core/testing';

export function main() {
  describe('ApiHelpers', () => {
    describe('interpolate', () => {
      it('should interpolate :post_id and :id', () => {
        let comment = {id: 2, post_id: 1, content: 'Good work!'};
        let interpolatedPath = ApiHelpers.interpolate('/posts/:post_id/comments/:id', comment);
        expect(interpolatedPath).toEqual('/posts/1/comments/2');
        expect(comment).toEqual({id: 2, post_id: 1, content: 'Good work!'});
      });

      it('should interpolate :post_id and remove it', () => {
        let search = {post_id: 1, order_by: '-created_at'};
        let interpolatedPath = ApiHelpers.interpolate('/posts/:post_id/comments', search, true);
        expect(interpolatedPath).toEqual('/posts/1/comments');
        expect(search).toEqual({order_by: '-created_at'});
      });
    });

    describe('toSearch', () => {
      it('should build URLSearchParams', () => {
        let search = {post_id: 1, order_by: '-created_at'};
        let urlSearchParams = ApiHelpers.toSearch(search);
        expect(urlSearchParams instanceof URLSearchParams).toEqual(true);
        expect(urlSearchParams.toString()).toEqual('post_id=1&order_by=-created_at');
      });
    });
  });
};
