import { toPassPackageAudit } from 'jest-package-audit';

expect.extend({ toPassPackageAudit });

jest.retryTimes(5);
jest.setTimeout(20000);

test('packages do not have vulnerabilities', async () => {
    await expect({}).toPassPackageAudit();
});
